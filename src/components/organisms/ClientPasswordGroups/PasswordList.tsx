import { memo, useState } from 'react';

import { nanoid } from 'nanoid';
import { IClientPasswordList, ILocalPassword } from 'types/local-storage';

import { PasswordRow } from './PasswordRow';

type PasswordListProps = {
  localPasswords: ILocalPassword[] | [];
};

const PasswordList = memo(({ localPasswords }: PasswordListProps) => {
  const [revealIndex, setRevealIndex] = useState<number | null>(null);

  const handleReveal = (pswdIdx: number) => {
    if (revealIndex === pswdIdx) {
      setRevealIndex(null);
    } else {
      setRevealIndex(pswdIdx);
    }
  };

  return (
    <>
      {localPasswords.map((pswd: ILocalPassword, idx: number) => {
        return (
          <PasswordRow
            key={`_pass_${nanoid()}`}
            revealIndex={revealIndex}
            handleReveal={handleReveal}
            pswd={pswd}
            idx={idx}></PasswordRow>
        );
      })}
    </>
  );
});

const MemoizedList = memo(PasswordList);
export { MemoizedList as PasswordList };
