import * as React from 'react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton, IButtonStyles } from '@fluentui/react';
import axios from 'axios';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
const stackTokens = { childrenGap: 15 };

export const TextFieldControlledExample: React.FunctionComponent<{ 
    setName: React.Dispatch<React.SetStateAction<string>>, 
    setFurigana: React.Dispatch<React.SetStateAction<string>>,
    setMail: React.Dispatch<React.SetStateAction<string>>,
    setMailCheck: React.Dispatch<React.SetStateAction<string>>,
    setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
    formerZipCode: string,
    setFormerZipCode: React.Dispatch<React.SetStateAction<string>>,
    latterZipCode: string,
    setLatterZipCode: React.Dispatch<React.SetStateAction<string>>,
  }> = ({
    setName, setFurigana, setMail, setMailCheck, setPhoneNumber, setFormerZipCode, setLatterZipCode, formerZipCode, latterZipCode
  }) => {
    // const [formerZipCodeHere, setFormerZipCodeHere] = React.useState<string>('');
    // const [latterZipCodeHere, setLatterZipCodeHere] = React.useState<string>('');
  
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

    const onChangePhoneNumber = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setPhoneNumber(newValue || '');
      }, 
      [setPhoneNumber]
    );

    const onChangeFormerZipCode = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if(!newValue || newValue.length <= 3) {
          setFormerZipCode(newValue || '');
        }
      },
      [setFormerZipCode]
    );

    const onChangeLatterZipCode = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if(!newValue || newValue.length <= 4) {
          setLatterZipCode(newValue || '');
        }
      },
      [setLatterZipCode]
    );

    type Address = {
      address1: string,
      address2: string,
      address3: string,
      kana1: string,
      kana2: string,
      kana3: string,
      prefcode: string,
      zipcode: string
    }

    const onClickSearchAddress = async (event: React.MouseEvent<HTMLButtonElement>): Promise<Address[]> => {
      try {
        window.alert('search for address');
        const zipcode = formerZipCode + latterZipCode;
        const searchAddressURL = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode;
        const response = await axios.get(searchAddressURL);
        const arrayAddress = response.data['results'];
        console.log(arrayAddress);
        return arrayAddress
      } catch(error) {
        console.log(error);
        return []
      }
    };

    return (
      <>
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

          <TextField
            label="電話番号"
            onChange={onChangePhoneNumber}
            styles={textFieldStyles}
          />
        </Stack>
        <Stack tokens={stackTokens} horizontal>
          <TextField
            label="郵便番号"
            value={formerZipCode}
            onChange={onChangeFormerZipCode}
            styles={narrowTextFieldStyles}
          />

          <TextField
            label="　　　　"
            value={latterZipCode}
            onChange={onChangeLatterZipCode}
            styles={narrowTextFieldStyles}
          />

          <DefaultButton text='検索' onClick={onClickSearchAddress} />
        </Stack>

        <Stack tokens={stackTokens}>
          {/* // TODO: 市区町村、番地などに細分化する
        // TODO: 郵便番号に応じて住所を自動入力するボタンを設ける */}
        {/* <TextField
          label="住所"
          onChange={onChangeSecondTextFieldValue}
          styles={narrowTextFieldStyles}
        /> */}

        {/* // TODO: ドロップダウンで年/月/日を選択する */}
        {/* <TextField
          label="生年月日"
          onChange={onChangeSecondTextFieldValue}
          styles={narrowTextFieldStyles}
        /> */}
        </Stack>
      </>
    );
};
