import { certifications } from '../data/certifications';
import { Certification } from '../models/Certification';
import { goToUrl } from '../utils/goToUrl';
import { kebab } from '../utils/kebab';
import { Card } from '../widgets/Card';
import { Section } from '../widgets/Section';

export const Certifications = (): JSX.Element => {
  return (
    <Section title="Certifications">
      {certifications.map((certification) => (
        <Certification {...certification} />
      ))}
    </Section>
  );
};

const Certification = (certification: Certification): JSX.Element => {
  return (
    <Card
      title={certification.title}
      additionalClassNames={kebab(certification.title)}
      onClick={() => certification.url && goToUrl(certification.url)}
    >
      <div className="issued-by">Issued By: {certification.issuedBy}</div>
      <div className="issued-date">Issued Date:{certification.issuedDate}</div>
      <div className="expiry">Expiry: {certification.expiresDate}</div>
    </Card>
  );
};
