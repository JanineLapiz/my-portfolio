import { profiles } from '../data/profiles';
import { Profile } from '../models/Profile';
import { goToUrl } from '../utils/goToUrl';
import { kebab } from '../utils/kebab';
import { Card } from '../widgets/Card';
import { Section } from '../widgets/Section';

export const Profiles = (): JSX.Element => {
  return (
    <Section title="Profiles" additionalClassNames="profiles">
      {profiles.map((profile) => (
        <Profile {...profile} />
      ))}
    </Section>
  );
};

const Profile = (profile: Profile): JSX.Element => {
  return (
    <Card
      title={profile.host}
      additionalClassNames={kebab(profile.host)}
      onClick={() => goToUrl(profile.url)}
      icon={profile.url}
    />
  );
};
