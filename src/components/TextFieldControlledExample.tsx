import * as React from 'react';
import { TextField, ITextFieldStyles } from '@fluentui/react/lib/TextField';
import { Stack } from '@fluentui/react/lib/Stack';
import { DefaultButton } from '@fluentui/react/lib/Button';
import axios from 'axios';

const textFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 300 } };
const narrowTextFieldStyles: Partial<ITextFieldStyles> = { fieldGroup: { width: 100 } };
const stackTokens = { childrenGap: 15 };

type UserRegisterProps = {
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

export const TextFieldControlledExample: React.FunctionComponent<UserRegisterProps> = (props): JSX.Element => {
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
        // ????????????React?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
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
            label="??????"
            value={props.name}
            onChange={onChangeName}
            styles={textFieldStyles}
          />

          <TextField
            label="????????????"
            value={props.furigana}
            onChange={onChangeFurigana}
            styles={textFieldStyles}
          />

          <TextField
            label="?????????????????????"
            value={props.mail}
            onChange={onChangeMail}
            styles={textFieldStyles}
          />

          <TextField
            label="?????????????????????????????????"
            value={props.mailCheck}
            onChange={onChangeMailCheck}
            styles={textFieldStyles}
          />

          <TextField
            label="????????????"
            value={props.phoneNumber}
            onChange={onChangePhoneNumber}
            styles={textFieldStyles}
          />
        </Stack>
        <Stack tokens={stackTokens} horizontal>
          <TextField
            label="????????????"
            value={props.formerZipCode}
            onChange={onChangeFormerZipCode}
            styles={narrowTextFieldStyles}
          />

          <TextField
            label="????????????"
            value={props.latterZipCode}
            onChange={onChangeLatterZipCode}
            styles={narrowTextFieldStyles}
          />

          <DefaultButton 
            text="??????"
            onClick={onClickSearchAddress}
            style={{position: "relative", top: 31.5}}
          />
        </Stack>

        <Stack tokens={stackTokens}>
        <TextField
          label="????????????"
          value={props.prefecture}
          onChange={onChangePrefecture}
          styles={narrowTextFieldStyles}
        />

        <TextField
          label="????????????"
          value={props.city}
          onChange={onChangeCity}
          styles={textFieldStyles}
        />

        <TextField
          label="?????????"
          value={props.block}
          onChange={onChangeBlock}
          styles={textFieldStyles}
        />

        <TextField
          label="????????????/?????????????????????"
          value={props.building}
          onChange={onChangeBuilding}
          styles={textFieldStyles}
        />

        {/* // TODO: ???????????????????????????/???/?????????????????? */}
        {/* <TextField
          label="????????????"
          onChange={onChangeSecondTextFieldValue}
          styles={narrowTextFieldStyles}
        /> */}
        </Stack>
      </div>
    );
};
