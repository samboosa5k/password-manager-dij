import { useState } from 'react';

import { nanoid } from 'nanoid';
import { IClientPasswordList, ILocalPassword } from 'types/local-storage';

import { PasswordRow } from './PasswordRow';

export const PasswordList = ({
  client,
  localPasswords
}: IClientPasswordList) => {
  const [revealIndex, setRevealIndex] = useState<number | null>(null);

  const handleReveal = (pswdIdx: number) => {
    if (revealIndex === pswdIdx) {
      setRevealIndex(null);
    }
    if (revealIndex !== pswdIdx) {
      setRevealIndex(pswdIdx);
    }
  };

  return (
    <>
      {localPasswords.map((pswd: ILocalPassword, idx: number) => {
        const uniqueID = `${client}_pass_${nanoid()}`;
        return (
          <PasswordRow
            key={uniqueID}
            revealIndex={revealIndex}
            handleReveal={handleReveal}
            pswd={pswd}
            idx={idx}></PasswordRow>
        );
      })}
    </>
  );
};
