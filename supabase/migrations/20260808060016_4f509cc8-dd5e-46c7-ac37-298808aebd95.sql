CREATE OR REPLACE FUNCTION public.set_contact_routing()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.routed_to := CASE NEW.enquiry_type
    WHEN 'Sales & Quotation' THEN 'sales@evenor.org'
    WHEN 'Tender Submission' THEN 'tenders@evenor.org'
    WHEN 'Partnership Proposal' THEN 'partners@evenor.org'
    WHEN 'Investor Enquiry' THEN 'joachim@evenor.org'
    WHEN 'Executive Office' THEN 'joachim@evenor.org'
    ELSE 'support@evenor.org'
  END;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS contacts_set_routing ON public.contacts;
CREATE TRIGGER contacts_set_routing
BEFORE INSERT ON public.contacts
FOR EACH ROW EXECUTE FUNCTION public.set_contact_routing();

DROP POLICY IF EXISTS "Public can submit a validated enquiry" ON public.contacts;

CREATE POLICY "Public can submit a validated enquiry"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 1 AND 120
  AND length(btrim(message)) BETWEEN 5 AND 5000
  AND email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 254
  AND enquiry_type IN ('General','Sales & Quotation','Tender Submission','Partnership Proposal','Investor Enquiry','Executive Office')
  AND (organisation IS NULL OR length(organisation) <= 200)
  AND (country IS NULL OR length(country) <= 100)
  AND (phone IS NULL OR length(phone) <= 40)
);