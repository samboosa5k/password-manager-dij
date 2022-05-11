import { Block } from '@components/molecules';
import { NewPasswordForm } from '@organisms/NewPasswordForm';
import DefaultPage from '@templates/Page/Default';

import PasswordStateProvider from 'contexts/NewPasswordContext/PasswordContext';

export const AddPasswordView = () => {
  return (
    <DefaultPage title="Add Password">
      <PasswordStateProvider>
        <Block maxWidth="512px">
          <NewPasswordForm />
        </Block>
      </PasswordStateProvider>
    </DefaultPage>
  );
};
