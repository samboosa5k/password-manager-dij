import { ChangeEvent, useMemo } from 'react';

import { Dropdown, FlexColumn } from '@components/molecules';

import { useAppState } from 'contexts';
import { usePasswordState } from 'contexts/NewPasswordContext/PasswordContext';
import { isDefined } from 'utils/value-checks';
import { PasswordStateActions } from 'contexts/NewPasswordContext';

/**
 * Client selection dropdown for the new password form
 * @returns {JSX.Element}
 */
export const ClientSelect = () => {
  const { passwordState, dispatch } = usePasswordState();
  const { appState } = useAppState();

  // Quick map of the clients from the pastebin api
  // For use in the select options
  const clientMappedToDropdown = useMemo(() => {
    return appState.clients.map(({ name }) => {
      return { label: name, value: name };
    });
  }, [appState.clients]);

  // Handle the change of the client dropdown
  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLSelectElement;
    dispatch({ type: PasswordStateActions.UPDATE_CLIENT, payload: value });
  };

  return (
    <FlexColumn
      id="client-container"
      position="relative"
      width="auto"
      height="auto"
      margin="4px">
      {isDefined(appState) && (
        <Dropdown
          id="client"
          options={clientMappedToDropdown}
          name="clientsDropdown"
          label="Clients:"
          value={passwordState.client}
          handleChange={handleChange}
        />
      )}
    </FlexColumn>
  );
};
