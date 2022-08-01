/* eslint-disable linebreak-style */

export interface FilterObject {
  name?: string;
  origin?: string;
  color?: string;
  favorite?: boolean;
  mana?: number;
  size?: string;
  count?: number;
}

export interface CardFilterData {
  name?: string;
  origin?: string;
  color?: string;
  size?: string ;

}
export interface FilterObjectArr {
  name?: string | null;
  origin?: string[] | null;
  color?: string[] | null;
  favorite?: boolean | null;
  mana?: number[] | null;
  size?: string[] | null;
  count?: number[] | null;
  sort?: string | null;
}

export type TDataCard = ({
  id?: number;
  num: string;
  name: string;
  count: number;
  mana: number;
  origin: string;
  color: string;
  size: string;
  favorite: boolean;
});
