export interface Iinstitute{
    instituteName: string,
    instituteEmail: string,
    institutePhoneNumber: string,
    instituteAddress: string,
    instituteVatNo: string,
    institutePanNo: string

}
export interface IDecodedToken {
  id: string;
  name: string;
  role: string;
  iat: number;
  exp: number;
}