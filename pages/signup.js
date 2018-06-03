import { signupForm } from '../config/forms';
import AccountCard from '../src/components/AccountCard';
import withRoot from '../src/withRoot';

export default withRoot(() => <AccountCard form={signupForm} />);
