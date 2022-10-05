import * as React from 'react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
const stackTokens = { childrenGap: 15 };

export const TextFieldControlledExample: React.FunctionComponent<{ 
    setName: React.Dispatch<React.SetStateAction<string>>, 
    setFurigana: React.Dispatch<React.SetStateAction<string>>,
    setMail: React.Dispatch<React.SetStateAction<string>>,
    setMailCheck: React.Dispatch<React.SetStateAction<string>>
  }> = ({
    setName, setFurigana, setMail, setMailCheck
  }) => {
  const onChangeName = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setName(newValue || '');
    },
    [setName]
  );
  const onChangeFurigana = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setFurigana(newValue || '');
    },
    [setFurigana]
  );
  const onChangeMail = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setMail(newValue || '');
    },
    [setMail]
  );
  const onChangeMailCheck = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setMailCheck(newValue || '');
    },
    [setMailCheck]
  );

  return (
    <Stack tokens={stackTokens}>
      <TextField
        label="氏名"
        onChange={onChangeName}
        styles={textFieldStyles}
      />

      <TextField
        label="ふりがな"
        onChange={onChangeFurigana}
        styles={textFieldStyles}
      />

      <TextField
        label="メールアドレス"
        onChange={onChangeMail}
        styles={textFieldStyles}
      />

      <TextField
        label="メールアドレス（確認）"
        onChange={onChangeMailCheck}
        styles={textFieldStyles}
      />

      {/* <TextField
        label="電話番号"
        onChange={onChangeSecondTextFieldValue}
        styles={narrowTextFieldStyles}
      />

      <TextField
        label="郵便番号"
        onChange={onChangeSecondTextFieldValue}
        styles={narrowTextFieldStyles}
      />

      <TextField
        label="住所"
        onChange={onChangeSecondTextFieldValue}
        styles={narrowTextFieldStyles}
      />

      <TextField
        label="生年月日"
        onChange={onChangeSecondTextFieldValue}
        styles={narrowTextFieldStyles}
      /> */}
    </Stack>
  );
};
