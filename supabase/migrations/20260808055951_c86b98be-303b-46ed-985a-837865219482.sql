DROP POLICY IF EXISTS "Anyone can submit an enquiry" ON public.contacts;

CREATE POLICY "Public can submit a validated enquiry"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(btrim(name)) BETWEEN 2 AND 120
  AND length(btrim(message)) BETWEEN 10 AND 4000
  AND email ~* '^[A-Za-z0-9._%%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'
  AND length(email) <= 254
  AND enquiry_type IN ('general','sales','tenders','partnerships','investors','media','careers')
  AND (organisation IS NULL OR length(organisation) <= 160)
  AND (country IS NULL OR length(country) <= 80)
  AND (phone IS NULL OR length(phone) <= 40)
  AND routed_to IS NULL
);