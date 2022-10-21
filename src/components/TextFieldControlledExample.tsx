import * as React from 'react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';
import axios from 'axios';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
const stackTokens = { childrenGap: 15 };

type RegisterFormProps = {
  name: string,
  setName: React.Dispatch<React.SetStateAction<string>>, 
  furigana: string,
  setFurigana: React.Dispatch<React.SetStateAction<string>>,
  mail: string,
  setMail: React.Dispatch<React.SetStateAction<string>>,
  mailCheck: string,
  setMailCheck: React.Dispatch<React.SetStateAction<string>>,
  phoneNumber: string,
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>,
  formerZipCode: string,
  setFormerZipCode: React.Dispatch<React.SetStateAction<string>>,
  latterZipCode: string,
  setLatterZipCode: React.Dispatch<React.SetStateAction<string>>,
  prefecture: string,
  setPrefecture: React.Dispatch<React.SetStateAction<string>>,
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>,
  block: string,
  setBlock: React.Dispatch<React.SetStateAction<string>>,
  building: string
  setBuilding: React.Dispatch<React.SetStateAction<string>>
}

export const TextFieldControlledExample: React.FunctionComponent<RegisterFormProps> = (props): JSX.Element => {
    // const [formerZipCodeHere, setFormerZipCodeHere] = React.useState<string>('');
    // const [latterZipCodeHere, setLatterZipCodeHere] = React.useState<string>('');
  
    const onChangeName = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setName(newValue || '');
      },
      [props]
    );

    const onChangeFurigana = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setFurigana(newValue || '');
      },
      [props]
    );

    const onChangeMail = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setMail(newValue || '');
      },
      [props]
    );

    const onChangeMailCheck = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setMailCheck(newValue || '');
      },
      [props]
    );

    const onChangePhoneNumber = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setPhoneNumber(newValue || '');
      }, 
      [props]
    );

    const onChangeFormerZipCode = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if(!newValue || newValue.length <= 3) {
          props.setFormerZipCode(newValue || '');
        }
      },
      [props]
    );

    const onChangeLatterZipCode = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        if(!newValue || newValue.length <= 4) {
          props.setLatterZipCode(newValue || '');
        }
      },
      [props]
    );

    const onChangePrefecture = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setPrefecture(newValue || '');
      }, 
      [props]
    );

    const onChangeCity = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setCity(newValue || '');
      }, 
      [props]
    );

    const onChangeBlock = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setBlock(newValue || '');
      }, 
      [props]
    );

    const onChangeBuilding = React.useCallback(
      (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
        props.setBuilding(newValue || '');
      }, 
      [props]
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
        const zipcode = props.formerZipCode + props.latterZipCode;
        const searchAddressURL = 'https://zipcloud.ibsnet.co.jp/api/search?zipcode=' + zipcode;
        const response = await axios.get(searchAddressURL);
        // あくまでReactの学習に焦点を当てているため、一つの郵便番号に複数の住所が対応する場合は便宜上先頭の住所のみを利用する
        const address: Address = response.data['results'][0];
        setAddress(address['address1'], address['address2'], address['address3']);
      } catch(error) {
        console.log(error);
      }
    };

    const setAddress = (prefecture: string, city: string, block: string) => {
      props.setPrefecture(prefecture);
      props.setCity(city);
      props.setBlock(block);
    };

    return (
      <div>
        <Stack tokens={stackTokens}>
          <TextField
            label="氏名"
            value={props.name}
            onChange={onChangeName}
            styles={textFieldStyles}
          />

          <TextField
            label="ふりがな"
            value={props.furigana}
            onChange={onChangeFurigana}
            styles={textFieldStyles}
          />

          <TextField
            label="メールアドレス"
            value={props.mail}
            onChange={onChangeMail}
            styles={textFieldStyles}
          />

          <TextField
            label="メールアドレス（確認）"
            value={props.mailCheck}
            onChange={onChangeMailCheck}
            styles={textFieldStyles}
          />

          <TextField
            label="電話番号"
            value={props.phoneNumber}
            onChange={onChangePhoneNumber}
            styles={textFieldStyles}
          />
        </Stack>
        <Stack tokens={stackTokens} horizontal>
          <TextField
            label="郵便番号"
            value={props.formerZipCode}
            onChange={onChangeFormerZipCode}
            styles={narrowTextFieldStyles}
          />

          <TextField
            label="　　　　"
            value={props.latterZipCode}
            onChange={onChangeLatterZipCode}
            styles={narrowTextFieldStyles}
          />

          <DefaultButton 
            text="検索"
            onClick={onClickSearchAddress}
            style={{position: "relative", top: 31.5}}
          />
        </Stack>

        <Stack tokens={stackTokens}>
        <TextField
          label="都道府県"
          value={props.prefecture}
          onChange={onChangePrefecture}
          styles={narrowTextFieldStyles}
        />

        <TextField
          label="市区町村"
          value={props.city}
          onChange={onChangeCity}
          styles={textFieldStyles}
        />

        <TextField
          label="番地帯"
          value={props.block}
          onChange={onChangeBlock}
          styles={textFieldStyles}
        />

        <TextField
          label="アパート/マンション名等"
          value={props.building}
          onChange={onChangeBuilding}
          styles={textFieldStyles}
        />

        {/* // TODO: ドロップダウンで年/月/日を選択する */}
        {/* <TextField
          label="生年月日"
          onChange={onChangeSecondTextFieldValue}
          styles={narrowTextFieldStyles}
        /> */}
        </Stack>
      </div>
    );
};
