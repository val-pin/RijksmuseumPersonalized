export type UserType = {
  email: string;
  userId: string;
};

export type Message = string;

export type Artwork = {
  id: string;
  objectNumber: string;
  title: string;
  hasImage: boolean;
  principalOrFirstMaker: string;
  longTitle: string;
  showImage: boolean;
  webImage: WebImage;
};

export interface DetailsFetchResult {
  elapsedMilliseconds: number;
  artObject: ArtObjectType;
  artObjectPage: ArtObjectPage;
}

export interface Dimensions {
  part: string;
  precision: string | null;
  type: string;
  unit: string;
  value: string;
}
export interface Label {
  title: string;
  makerLine: string;
  description: string;
  notes: string;
  date: string;
}

export interface ArtObjectType {
  links: Links;
  id: string;
  priref: string;
  objectNumber: string;
  language: string;
  title: string;
  copyrightHolder: any;
  webImage: WebImage;
  colors: Color[];
  colorsWithNormalization: ColorsWithNormalization[];
  normalizedColors: NormalizedColor[];
  normalized32Colors: Normalized32Color[];
  materialsThesaurus: any[];
  techniquesThesaurus: any[];
  productionPlacesThesaurus: any[];
  titles: string[];
  description: string;
  labelText: any;
  objectTypes: string[];
  objectCollection: string[];
  makers: any[];
  principalMakers: PrincipalMaker[];
  plaqueDescriptionDutch: string;
  plaqueDescriptionEnglish: string;
  principalMaker: string;
  artistRole: any;
  associations: any[];
  acquisition: Acquisition;
  exhibitions: any[];
  materials: string[];
  techniques: any[];
  productionPlaces: string[];
  dating: Dating;
  classification: Classification;
  hasImage: boolean;
  historicalPersons: string[];
  inscriptions: any[];
  documentation: string[];
  catRefRPK: any[];
  principalOrFirstMaker: string;
  dimensions: Dimensions[];
  physicalProperties: any[];
  physicalMedium: string;
  longTitle: string;
  subTitle: string;
  scLabelLine: string;
  // label: Label;
  label: {
    title: string;
    makerLine: string;
    description: string;
    notes: string;
    date: string;
  };
  showImage: boolean;
  location: string;
}

// export interface Links {
//   search: string;
// }

export interface WebImage {
  guid: string;
  offsetPercentageX: number;
  offsetPercentageY: number;
  width: number;
  height: number;
  url: string;
}

// export interface Color {
//   percentage: number;
//   hex: string;
// }

// export interface ColorsWithNormalization {
//   originalHex: string;
//   normalizedHex: string;
// }

// export interface NormalizedColor {
//   percentage: number;
//   hex: string;
// }

// export interface Normalized32Color {
//   percentage: number;
//   hex: string;
// }

export interface PrincipalMaker {
  name: string;
  unFixedName: string;
  placeOfBirth: string;
  dateOfBirth: string;
  dateOfBirthPrecision: any;
  dateOfDeath: string;
  dateOfDeathPrecision: any;
  placeOfDeath: string;
  occupation: string[];
  roles: string[];
  nationality: string;
  biography: any;
  productionPlaces: string[];
  qualification: any;
  labelDesc: string;
}

export interface Acquisition {
  method: string;
  date: string;
  creditLine: string;
}

export interface Dating {
  presentingDate: string;
  sortingDate: number;
  period: number;
  yearEarly: number;
  yearLate: number;
}

// export interface Classification {
//   iconClassIdentifier: string[];
//   iconClassDescription: string[];
//   motifs: any[];
//   events: any[];
//   periods: any[];
//   places: string[];
//   people: string[];
//   objectNumbers: string[];
// }

// export interface Dimension {
//   unit: string;
//   type: string;
//   precision: any;
//   part: any;
//   value: string;
// }

export interface ArtObjectPage {
  id: string;
  similarPages: any[];
  lang: string;
  objectNumber: string;
  tags: any[];
  plaqueDescription: string;
  audioFile1: any;
  audioFileLabel1: any;
  audioFileLabel2: any;
  createdOn: string;
  updatedOn: string;
  adlibOverrides: AdlibOverrides;
}
