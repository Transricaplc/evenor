ALTER TABLE public.contacts
  ADD CONSTRAINT contacts_name_len CHECK (char_length(name) BETWEEN 1 AND 120),
  ADD CONSTRAINT contacts_email_len CHECK (char_length(email) BETWEEN 3 AND 254),
  ADD CONSTRAINT contacts_message_len CHECK (char_length(message) BETWEEN 5 AND 5000),
  ADD CONSTRAINT contacts_org_len CHECK (organisation IS NULL OR char_length(organisation) <= 200),
  ADD CONSTRAINT contacts_country_len CHECK (country IS NULL OR char_length(country) <= 100),
  ADD CONSTRAINT contacts_phone_len CHECK (phone IS NULL OR char_length(phone) <= 40),
  ADD CONSTRAINT contacts_enquiry_type_len CHECK (char_length(enquiry_type) BETWEEN 1 AND 60);