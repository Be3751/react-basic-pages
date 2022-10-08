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
    setPrefecture: React.Dispatch<React.SetStateAction<string>>,
    setCity: React.Dispatch<React.SetStateAction<string>>,
    setBlock: React.Dispatch<React.SetStateAction<string>>,
    setBuilding: React.Dispatch<React.SetStateAction<string>>,
  }> = ({
    setName, 
    setFurigana, 
    setMail, 
    setMailCheck, 
    setPhoneNumber, 
    formerZipCode, setFormerZipCode, 
    latterZipCode, setLatterZipCode, 
    setPrefecture, 
    setCity, 
    setBlock, 
    setBuilding
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

    const onChangePrefecture = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setPrefecture(newValue || '');
      }, 
      [setPrefecture]
    );

    const onChangeCity = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setCity(newValue || '');
      }, 
      [setCity]
    );

    const onChangeBlock = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setBlock(newValue || '');
      }, 
      [setBlock]
    );

    const onChangeBuilding = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        setBuilding(newValue || '');
      }, 
      [setBuilding]
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

    const onClickSearchAddress = async (event: React.MouseEvent<HTMLButtonElement>) => {
      try {
        window.alert('search for address');
        const zipcode = formerZipCode + latterZipCode;
        const searchAddressURL = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode;
        const response = await axios.get(searchAddressURL);
        // あくまでReactの学習に焦点を当てているため、一つの郵便番号に複数の住所が対応する場合は便宜上先頭の住所のみを利用する
        const address: Address = response.data['results'][0];
        setAddress(address['address1'], address['address2']+address['address3']);
      } catch(error) {
        console.log(error);
      }
    };

    const setAddress = (prefecture: string, city: string) => {
      console.log(prefecture);
      console.log(city);
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
        <TextField
          label="都道府県"
          onChange={onChangePrefecture}
          styles={narrowTextFieldStyles}
        />

        <TextField
          label="市区町村"
          onChange={onChangeCity}
          styles={narrowTextFieldStyles}
        />

        <TextField
          label="番地帯"
          onChange={onChangeBlock}
          styles={narrowTextFieldStyles}
        />

        <TextField
          label="アパート/マンション名等"
          onChange={onChangeBuilding}
          styles={narrowTextFieldStyles}
        />

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
