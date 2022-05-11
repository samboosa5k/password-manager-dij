import { useMemo, useRef, useState } from 'react';

import { Block, FlexColumn } from '@components/molecules';

import { useLocalPassword } from '@hooks/useLocalStorage/useLocalStorage';
import { ILocalPassword } from 'types/local-storage';
import { createImportSpecifier } from 'typescript';
import { isDefined } from 'utils/value-checks';

import { ControlBar } from './ControlBar';
import { PasswordList } from './PasswordList';
import { IClientContainer } from './types';

export const ClientContainer = ({ client }: IClientContainer) => {
  const [localPasswords, setLocalPasswords] = useState<ILocalPassword[]>([]);

  return (
    <FlexColumn
      position="relative"
      width="100%"
      height="auto"
      margin="0 0 1em 0">
      {/* The title bar and buton to active local storage */}
      {isDefined(client) && (
        <ControlBar client={client} setLocalPasswords={setLocalPasswords} />
      )}

      {/* The password list */}
      <Block position="relative">
        <FlexColumn position="relative" width="100%" height="auto">
          <PasswordList client={client.name} localPasswords={localPasswords} />
        </FlexColumn>
      </Block>
    </FlexColumn>
  );
};
