import { useCallback, useEffect, useRef, useState } from 'react';

import { Block, FlexColumn } from '@components/molecules';

import { ILocalPassword } from 'types/local-storage';
import { isDefined } from 'utils/value-checks';
import { useLocalPassword } from '@hooks/useLocalStorage/useLocalStorage';

import { ControlBar } from './ControlBar';
import { PasswordList } from './PasswordList';
import { IClientContainer } from './types';

/**
 * The main conainer a client tab and all their passwords
 * @param param0
 * @returns
 */
export const ClientContainer = ({ client }: IClientContainer) => {
  const { getPasswords } = useLocalPassword();
  const [localPasswords, setLocalPasswords] = useState<ILocalPassword[]>([]);
  const passwordsRef = useRef<string>('');

  // Handle loading passwprds from local storage
  const handleLoadLocalPasswords = useCallback(() => {
    const getLocalPasswords = getPasswords(client.name);
    if (getLocalPasswords !== null) {
      const parsedLocalPasswords = JSON.parse(getLocalPasswords);
      if (getLocalPasswords !== passwordsRef.current) {
        setLocalPasswords(parsedLocalPasswords);
        passwordsRef.current = getLocalPasswords;
      }
    }
  }, [client, localPasswords, setLocalPasswords]);

  useEffect(() => {
    handleLoadLocalPasswords();
  }, [handleLoadLocalPasswords]);

  // Handle visibility of the list in the DOM
  const [visible, setVisible] = useState<boolean>(false);
  const handleTogglePasswords = () => {
    if (localPasswords.length > 0) {
      if (visible) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  };

  return (
    <FlexColumn
      id="client-container"
      position="relative"
      width="auto"
      height="auto"
      margin="4px">
      {/* The title bar and buton to active local storage */}
      {isDefined(client) && (
        <>
          <ControlBar
            client={client}
            handleTogglePasswords={handleTogglePasswords}
          />

          <Block
            style={{ display: visible ? 'block' : 'none' }}
            position="relative"
            backgroundColor="transparent">
            <FlexColumn position="relative" width="100%" height="auto">
              <PasswordList localPasswords={localPasswords} />
            </FlexColumn>
          </Block>
        </>
      )}
    </FlexColumn>
  );
};
