import { AddNewPasswordView } from '@organisms/AddNewPasswordView';
import DefaultPage from '@templates/Page/Default';

export const AddPassword = () => {
  return (
    <DefaultPage title="Add Password">
      <AddNewPasswordView />
    </DefaultPage>
  );
};

export default AddPassword;
