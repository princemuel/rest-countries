interface Photo {
  alt?: string;
  url: string;
  tag: string;
  blurredDataUrl: string;
}

interface CountryType {
  name: Name;
  tld?: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: Currencies;
  idd: Idd;
  capital?: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: Languages;
  translations: Translations;
  latlng: number[];
  landlocked: boolean;
  borders?: string[];
  area: number;
  demonyms?: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  fifa?: string;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: CoatOfArms;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
  postalCode?: PostalCode;
  gini?: Gini;
}

interface Name {
  common: string;
  official: string;
  nativeName?: NativeName;
}

interface NativeName {
  fra?: Fra;
  eng?: Eng;
  smo?: Smo;
  rus?: Rus;
  tuk?: Tuk;
  mya?: Mya;
  ara?: Ara;
  kon?: Kon;
  lin?: Lin;
  lua?: Lua;
  swa?: Swa;
  nld?: Nld;
  pap?: Pap;
  niu?: Niu;
  por?: Por;
  ron?: Ron;
  lao?: Lao;
  spa?: Spa;
  pov?: Pov;
  bel?: Bel;
  tur?: Tur;
  pol?: Pol;
  tet?: Tet;
  rar?: Rar;
  heb?: Heb;
  nya?: Nya;
  aze?: Aze;
  jpn?: Jpn;
  zho?: Zho;
  mah?: Mah;
  kor?: Kor;
  bis?: Bis;
  amh?: Amh;
  hun?: Hun;
  deu?: Deu;
  vie?: Vie;
  ber?: Ber;
  mey?: Mey;
  ben?: Ben;
  nrf?: Nrf;
  lit?: Lit;
  dan?: Dan;
  sqi?: Sqi;
  cal?: Cal;
  cha?: Cha;
  run?: Run;
  gle?: Gle;
  kat?: Kat;
  bul?: Bul;
  isl?: Isl;
  slv?: Slv;
  prs?: Prs;
  pus?: Pus;
  bos?: Bos;
  hrv?: Hrv;
  srp?: Srp;
  nno?: Nno;
  nob?: Nob;
  smi?: Smi;
  grn?: Grn;
  gsw?: Gsw;
  ita?: Ita;
  roh?: Roh;
  kaz?: Kaz;
  aym?: Aym;
  que?: Que;
  dzo?: Dzo;
  mkd?: Mkd;
  ltz?: Ltz;
  mon?: Mon;
  jam?: Jam;
  tir?: Tir;
  bwg?: Bwg;
  kck?: Kck;
  khi?: Khi;
  ndc?: Ndc;
  nde?: Nde;
  sna?: Sna;
  sot?: Sot;
  toi?: Toi;
  tsn?: Tsn;
  tso?: Tso;
  ven?: Ven;
  xho?: Xho;
  zib?: Zib;
  mlg?: Mlg;
  crs?: Crs;
  div?: Div;
  som?: Som;
  ssw?: Ssw;
  tgk?: Tgk;
  kal?: Kal;
  msa?: Msa;
  tam?: Tam;
  bar?: Bar;
  sag?: Sag;
  nor?: Nor;
  hat?: Hat;
  swe?: Swe;
  bjz?: Bjz;
  cat?: Cat;
  pau?: Pau;
  hye?: Hye;
  slk?: Slk;
  khm?: Khm;
  lat?: Lat;
  fas?: Fas;
  ukr?: Ukr;
  ind?: Ind;
  ces?: Ces;
  hmo?: Hmo;
  tpi?: Tpi;
  nau?: Nau;
  tvl?: Tvl;
  sin?: Sin;
  afr?: Afr;
  nbl?: Nbl;
  nso?: Nso;
  zul?: Zul;
  nfr?: Nfr;
  fao?: Fao;
  tkl?: Tkl;
  hin?: Hin;
  pih?: Pih;
  nep?: Nep;
  uzb?: Uzb;
  fij?: Fij;
  hif?: Hif;
  mfe?: Mfe;
  cnr?: Cnr;
  gil?: Gil;
  fil?: Fil;
  mri?: Mri;
  nzs?: Nzs;
  lav?: Lav;
  tha?: Tha;
  arc?: Arc;
  ckb?: Ckb;
  kin?: Kin;
  fin?: Fin;
  zdj?: Zdj;
  mlt?: Mlt;
  ell?: Ell;
  her?: Her;
  hgm?: Hgm;
  kwn?: Kwn;
  loz?: Loz;
  ndo?: Ndo;
  est?: Est;
  ton?: Ton;
  urd?: Urd;
  glv?: Glv;
  kir?: Kir;
}

interface Fra {
  official: string;
  common: string;
}

interface Eng {
  official: string;
  common: string;
}

interface Smo {
  official: string;
  common: string;
}

interface Rus {
  official: string;
  common: string;
}

interface Tuk {
  official: string;
  common: string;
}

interface Mya {
  official: string;
  common: string;
}

interface Ara {
  official: string;
  common: string;
}

interface Kon {
  official: string;
  common: string;
}

interface Lin {
  official: string;
  common: string;
}

interface Lua {
  official: string;
  common: string;
}

interface Swa {
  official: string;
  common: string;
}

interface Nld {
  official: string;
  common: string;
}

interface Pap {
  official: string;
  common: string;
}

interface Niu {
  official: string;
  common: string;
}

interface Por {
  official: string;
  common: string;
}

interface Ron {
  official: string;
  common: string;
}

interface Lao {
  official: string;
  common: string;
}

interface Spa {
  official: string;
  common: string;
}

interface Pov {
  official: string;
  common: string;
}

interface Bel {
  official: string;
  common: string;
}

interface Tur {
  official: string;
  common: string;
}

interface Pol {
  official: string;
  common: string;
}

interface Tet {
  official: string;
  common: string;
}

interface Rar {
  official: string;
  common: string;
}

interface Heb {
  official: string;
  common: string;
}

interface Nya {
  official: string;
  common: string;
}

interface Aze {
  official: string;
  common: string;
}

interface Jpn {
  official: string;
  common: string;
}

interface Zho {
  official: string;
  common: string;
}

interface Mah {
  official: string;
  common: string;
}

interface Kor {
  official: string;
  common: string;
}

interface Bis {
  official: string;
  common: string;
}

interface Amh {
  official: string;
  common: string;
}

interface Hun {
  official: string;
  common: string;
}

interface Deu {
  official: string;
  common: string;
}

interface Vie {
  official: string;
  common: string;
}

interface Ber {
  official: string;
  common: string;
}

interface Mey {
  official: string;
  common: string;
}

interface Ben {
  official: string;
  common: string;
}

interface Nrf {
  official: string;
  common: string;
}

interface Lit {
  official: string;
  common: string;
}

interface Dan {
  official: string;
  common: string;
}

interface Sqi {
  official: string;
  common: string;
}

interface Cal {
  official: string;
  common: string;
}

interface Cha {
  official: string;
  common: string;
}

interface Run {
  official: string;
  common: string;
}

interface Gle {
  official: string;
  common: string;
}

interface Kat {
  official: string;
  common: string;
}

interface Bul {
  official: string;
  common: string;
}

interface Isl {
  official: string;
  common: string;
}

interface Slv {
  official: string;
  common: string;
}

interface Prs {
  official: string;
  common: string;
}

interface Pus {
  official: string;
  common: string;
}

interface Bos {
  official: string;
  common: string;
}

interface Hrv {
  official: string;
  common: string;
}

interface Srp {
  official: string;
  common: string;
}

interface Nno {
  official: string;
  common: string;
}

interface Nob {
  official: string;
  common: string;
}

interface Smi {
  official: string;
  common: string;
}

interface Grn {
  official: string;
  common: string;
}

interface Gsw {
  official: string;
  common: string;
}

interface Ita {
  official: string;
  common: string;
}

interface Roh {
  official: string;
  common: string;
}

interface Kaz {
  official: string;
  common: string;
}

interface Aym {
  official: string;
  common: string;
}

interface Que {
  official: string;
  common: string;
}

interface Dzo {
  official: string;
  common: string;
}

interface Mkd {
  official: string;
  common: string;
}

interface Ltz {
  official: string;
  common: string;
}

interface Mon {
  official: string;
  common: string;
}

interface Jam {
  official: string;
  common: string;
}

interface Tir {
  official: string;
  common: string;
}

interface Bwg {
  official: string;
  common: string;
}

interface Kck {
  official: string;
  common: string;
}

interface Khi {
  official: string;
  common: string;
}

interface Ndc {
  official: string;
  common: string;
}

interface Nde {
  official: string;
  common: string;
}

interface Sna {
  official: string;
  common: string;
}

interface Sot {
  official: string;
  common: string;
}

interface Toi {
  official: string;
  common: string;
}

interface Tsn {
  official: string;
  common: string;
}

interface Tso {
  official: string;
  common: string;
}

interface Ven {
  official: string;
  common: string;
}

interface Xho {
  official: string;
  common: string;
}

interface Zib {
  official: string;
  common: string;
}

interface Mlg {
  official: string;
  common: string;
}

interface Crs {
  official: string;
  common: string;
}

interface Div {
  official: string;
  common: string;
}

interface Som {
  official: string;
  common: string;
}

interface Ssw {
  official: string;
  common: string;
}

interface Tgk {
  official: string;
  common: string;
}

interface Kal {
  official: string;
  common: string;
}

interface Msa {
  official: string;
  common: string;
}

interface Tam {
  official: string;
  common: string;
}

interface Bar {
  official: string;
  common: string;
}

interface Sag {
  official: string;
  common: string;
}

interface Nor {
  official: string;
  common: string;
}

interface Hat {
  official: string;
  common: string;
}

interface Swe {
  official: string;
  common: string;
}

interface Bjz {
  official: string;
  common: string;
}

interface Cat {
  official: string;
  common: string;
}

interface Pau {
  official: string;
  common: string;
}

interface Hye {
  official: string;
  common: string;
}

interface Slk {
  official: string;
  common: string;
}

interface Khm {
  official: string;
  common: string;
}

interface Lat {
  official: string;
  common: string;
}

interface Fas {
  official: string;
  common: string;
}

interface Ukr {
  official: string;
  common: string;
}

interface Ind {
  official: string;
  common: string;
}

interface Ces {
  official: string;
  common: string;
}

interface Hmo {
  official: string;
  common: string;
}

interface Tpi {
  official: string;
  common: string;
}

interface Nau {
  official: string;
  common: string;
}

interface Tvl {
  official: string;
  common: string;
}

interface Sin {
  official: string;
  common: string;
}

interface Afr {
  official: string;
  common: string;
}

interface Nbl {
  official: string;
  common: string;
}

interface Nso {
  official: string;
  common: string;
}

interface Zul {
  official: string;
  common: string;
}

interface Nfr {
  official: string;
  common: string;
}

interface Fao {
  official: string;
  common: string;
}

interface Tkl {
  official: string;
  common: string;
}

interface Hin {
  official: string;
  common: string;
}

interface Pih {
  official: string;
  common: string;
}

interface Nep {
  official: string;
  common: string;
}

interface Uzb {
  official: string;
  common: string;
}

interface Fij {
  official: string;
  common: string;
}

interface Hif {
  official: string;
  common: string;
}

interface Mfe {
  official: string;
  common: string;
}

interface Cnr {
  official: string;
  common: string;
}

interface Gil {
  official: string;
  common: string;
}

interface Fil {
  official: string;
  common: string;
}

interface Mri {
  official: string;
  common: string;
}

interface Nzs {
  official: string;
  common: string;
}

interface Lav {
  official: string;
  common: string;
}

interface Tha {
  official: string;
  common: string;
}

interface Arc {
  official: string;
  common: string;
}

interface Ckb {
  official: string;
  common: string;
}

interface Kin {
  official: string;
  common: string;
}

interface Fin {
  official: string;
  common: string;
}

interface Zdj {
  official: string;
  common: string;
}

interface Mlt {
  official: string;
  common: string;
}

interface Ell {
  official: string;
  common: string;
}

interface Her {
  official: string;
  common: string;
}

interface Hgm {
  official: string;
  common: string;
}

interface Kwn {
  official: string;
  common: string;
}

interface Loz {
  official: string;
  common: string;
}

interface Ndo {
  official: string;
  common: string;
}

interface Est {
  official: string;
  common: string;
}

interface Ton {
  official: string;
  common: string;
}

interface Urd {
  official: string;
  common: string;
}

interface Glv {
  official: string;
  common: string;
}

interface Kir {
  official: string;
  common: string;
}

interface Currencies {
  XPF?: Xpf;
  WST?: Wst;
  TMT?: Tmt;
  MMK?: Mmk;
  LBP?: Lbp;
  CDF?: Cdf;
  ANG?: Ang;
  NZD?: Nzd;
  STN?: Stn;
  MDL?: Mdl;
  JOD?: Jod;
  LAK?: Lak;
  USD?: Usd;
  NIO?: Nio;
  XOF?: Xof;
  BYN?: Byn;
  TRY?: Try;
  BBD?: Bbd;
  XCD?: Xcd;
  PLN?: Pln;
  SSP?: Ssp;
  CKD?: Ckd;
  KES?: Kes;
  ILS?: Ils;
  MWK?: Mwk;
  AZN?: Azn;
  JPY?: Jpy;
  DJF?: Djf;
  CRC?: Crc;
  MOP?: Mop;
  CLP?: Clp;
  EUR?: Eur;
  MXN?: Mxn;
  RUB?: Rub;
  GTQ?: Gtq;
  KPW?: Kpw;
  VUV?: Vuv;
  ETB?: Etb;
  HUF?: Huf;
  VND?: Vnd;
  DZD?: Dzd;
  MAD?: Mad;
  MRU?: Mru;
  GMD?: Gmd;
  BDT?: Bdt;
  KWD?: Kwd;
  GBP?: Gbp;
  JEP?: Jep;
  COP?: Cop;
  DKK?: Dkk;
  ALL?: All;
  BIF?: Bif;
  GEL?: Gel;
  BGN?: Bgn;
  ISK?: Isk;
  AFN?: Afn;
  BAM?: Bam;
  NOK?: Nok;
  PAB?: Pab;
  FKP?: Fkp;
  ARS?: Ars;
  QAR?: Qar;
  CHF?: Chf;
  LRD?: Lrd;
  XAF?: Xaf;
  KZT?: Kzt;
  PEN?: Pen;
  BTN?: Btn;
  INR?: Inr;
  MKD?: Mkd2;
  GNF?: Gnf;
  MNT?: Mnt;
  KYD?: Kyd;
  UGX?: Ugx;
  JMD?: Jmd;
  ERN?: Ern;
  KRW?: Krw;
  ZWL?: Zwl;
  MGA?: Mga;
  EGP?: Egp;
  AWG?: Awg;
  SCR?: Scr;
  MVR?: Mvr;
  GYD?: Gyd;
  SOS?: Sos;
  SZL?: Szl;
  ZAR?: Zar;
  TJS?: Tjs;
  AOA?: Aoa;
  CAD?: Cad;
  SGD?: Sgd;
  DOP?: Dop;
  HTG?: Htg;
  TND?: Tnd;
  TWD?: Twd;
  BZD?: Bzd;
  TTD?: Ttd;
  AMD?: Amd;
  ZMW?: Zmw;
  AUD?: Aud;
  BWP?: Bwp;
  KHR?: Khr;
  YER?: Yer;
  UYU?: Uyu;
  BHD?: Bhd;
  OMR?: Omr;
  CUC?: Cuc;
  CUP?: Cup;
  HKD?: Hkd;
  HNL?: Hnl;
  KGS?: Kgs;
  SHP?: Shp;
  BOB?: Bob;
  IMP?: Imp;
  PKR?: Pkr;
  TOP?: Top;
  NAD?: Nad;
  BRL?: Brl;
  SEK?: Sek;
  GHS?: Ghs;
  KMF?: Kmf;
  SBD?: Sbd;
  BSD?: Bsd;
  PYG?: Pyg;
  LYD?: Lyd;
  RWF?: Rwf;
  NGN?: Ngn;
  IQD?: Iqd;
  THB?: Thb;
  SLL?: Sll;
  CVE?: Cve;
  LSL?: Lsl;
  SYP?: Syp;
  SRD?: Srd;
  MZN?: Mzn;
  PHP?: Php;
  SAR?: Sar;
  IRR?: Irr;
  AED?: Aed;
  UAH?: Uah;
  IDR?: Idr;
  BND?: Bnd;
  CZK?: Czk;
  RSD?: Rsd;
  PGK?: Pgk;
  BMD?: Bmd;
  VES?: Ves;
  RON?: Ron2;
  TVD?: Tvd;
  CNY?: Cny;
  LKR?: Lkr;
  GGP?: Ggp;
  TZS?: Tzs;
  FOK?: Fok;
  MYR?: Myr;
  GIP?: Gip;
  SDG?: Sdg;
  NPR?: Npr;
  UZS?: Uzs;
  FJD?: Fjd;
  MUR?: Mur;
  KID?: Kid;
}

interface Xpf {
  name: string;
  symbol: string;
}

interface Wst {
  name: string;
  symbol: string;
}

interface Tmt {
  name: string;
  symbol: string;
}

interface Mmk {
  name: string;
  symbol: string;
}

interface Lbp {
  name: string;
  symbol: string;
}

interface Cdf {
  name: string;
  symbol: string;
}

interface Ang {
  name: string;
  symbol: string;
}

interface Nzd {
  name: string;
  symbol: string;
}

interface Stn {
  name: string;
  symbol: string;
}

interface Mdl {
  name: string;
  symbol: string;
}

interface Jod {
  name: string;
  symbol: string;
}

interface Lak {
  name: string;
  symbol: string;
}

interface Usd {
  name: string;
  symbol: string;
}

interface Nio {
  name: string;
  symbol: string;
}

interface Xof {
  name: string;
  symbol: string;
}

interface Byn {
  name: string;
  symbol: string;
}

interface Try {
  name: string;
  symbol: string;
}

interface Bbd {
  name: string;
  symbol: string;
}

interface Xcd {
  name: string;
  symbol: string;
}

interface Pln {
  name: string;
  symbol: string;
}

interface Ssp {
  name: string;
  symbol: string;
}

interface Ckd {
  name: string;
  symbol: string;
}

interface Kes {
  name: string;
  symbol: string;
}

interface Ils {
  name: string;
  symbol: string;
}

interface Mwk {
  name: string;
  symbol: string;
}

interface Azn {
  name: string;
  symbol: string;
}

interface Jpy {
  name: string;
  symbol: string;
}

interface Djf {
  name: string;
  symbol: string;
}

interface Crc {
  name: string;
  symbol: string;
}

interface Mop {
  name: string;
  symbol: string;
}

interface Clp {
  name: string;
  symbol: string;
}

interface Eur {
  name: string;
  symbol: string;
}

interface Mxn {
  name: string;
  symbol: string;
}

interface Rub {
  name: string;
  symbol: string;
}

interface Gtq {
  name: string;
  symbol: string;
}

interface Kpw {
  name: string;
  symbol: string;
}

interface Vuv {
  name: string;
  symbol: string;
}

interface Etb {
  name: string;
  symbol: string;
}

interface Huf {
  name: string;
  symbol: string;
}

interface Vnd {
  name: string;
  symbol: string;
}

interface Dzd {
  name: string;
  symbol: string;
}

interface Mad {
  name: string;
  symbol: string;
}

interface Mru {
  name: string;
  symbol: string;
}

interface Gmd {
  name: string;
  symbol: string;
}

interface Bdt {
  name: string;
  symbol: string;
}

interface Kwd {
  name: string;
  symbol: string;
}

interface Gbp {
  name: string;
  symbol: string;
}

interface Jep {
  name: string;
  symbol: string;
}

interface Cop {
  name: string;
  symbol: string;
}

interface Dkk {
  name: string;
  symbol: string;
}

interface All {
  name: string;
  symbol: string;
}

interface Bif {
  name: string;
  symbol: string;
}

interface Gel {
  name: string;
  symbol: string;
}

interface Bgn {
  name: string;
  symbol: string;
}

interface Isk {
  name: string;
  symbol: string;
}

interface Afn {
  name: string;
  symbol: string;
}

interface Bam {
  name: string;
}

interface Nok {
  name: string;
  symbol: string;
}

interface Pab {
  name: string;
  symbol: string;
}

interface Fkp {
  name: string;
  symbol: string;
}

interface Ars {
  name: string;
  symbol: string;
}

interface Qar {
  name: string;
  symbol: string;
}

interface Chf {
  name: string;
  symbol: string;
}

interface Lrd {
  name: string;
  symbol: string;
}

interface Xaf {
  name: string;
  symbol: string;
}

interface Kzt {
  name: string;
  symbol: string;
}

interface Pen {
  name: string;
  symbol: string;
}

interface Btn {
  name: string;
  symbol: string;
}

interface Inr {
  name: string;
  symbol: string;
}

interface Mkd2 {
  name: string;
  symbol: string;
}

interface Gnf {
  name: string;
  symbol: string;
}

interface Mnt {
  name: string;
  symbol: string;
}

interface Kyd {
  name: string;
  symbol: string;
}

interface Ugx {
  name: string;
  symbol: string;
}

interface Jmd {
  name: string;
  symbol: string;
}

interface Ern {
  name: string;
  symbol: string;
}

interface Krw {
  name: string;
  symbol: string;
}

interface Zwl {
  name: string;
  symbol: string;
}

interface Mga {
  name: string;
  symbol: string;
}

interface Egp {
  name: string;
  symbol: string;
}

interface Awg {
  name: string;
  symbol: string;
}

interface Scr {
  name: string;
  symbol: string;
}

interface Mvr {
  name: string;
  symbol: string;
}

interface Gyd {
  name: string;
  symbol: string;
}

interface Sos {
  name: string;
  symbol: string;
}

interface Szl {
  name: string;
  symbol: string;
}

interface Zar {
  name: string;
  symbol: string;
}

interface Tjs {
  name: string;
  symbol: string;
}

interface Aoa {
  name: string;
  symbol: string;
}

interface Cad {
  name: string;
  symbol: string;
}

interface Sgd {
  name: string;
  symbol: string;
}

interface Dop {
  name: string;
  symbol: string;
}

interface Htg {
  name: string;
  symbol: string;
}

interface Tnd {
  name: string;
  symbol: string;
}

interface Twd {
  name: string;
  symbol: string;
}

interface Bzd {
  name: string;
  symbol: string;
}

interface Ttd {
  name: string;
  symbol: string;
}

interface Amd {
  name: string;
  symbol: string;
}

interface Zmw {
  name: string;
  symbol: string;
}

interface Aud {
  name: string;
  symbol: string;
}

interface Bwp {
  name: string;
  symbol: string;
}

interface Khr {
  name: string;
  symbol: string;
}

interface Yer {
  name: string;
  symbol: string;
}

interface Uyu {
  name: string;
  symbol: string;
}

interface Bhd {
  name: string;
  symbol: string;
}

interface Omr {
  name: string;
  symbol: string;
}

interface Cuc {
  name: string;
  symbol: string;
}

interface Cup {
  name: string;
  symbol: string;
}

interface Hkd {
  name: string;
  symbol: string;
}

interface Hnl {
  name: string;
  symbol: string;
}

interface Kgs {
  name: string;
  symbol: string;
}

interface Shp {
  name: string;
  symbol: string;
}

interface Bob {
  name: string;
  symbol: string;
}

interface Imp {
  name: string;
  symbol: string;
}

interface Pkr {
  name: string;
  symbol: string;
}

interface Top {
  name: string;
  symbol: string;
}

interface Nad {
  name: string;
  symbol: string;
}

interface Brl {
  name: string;
  symbol: string;
}

interface Sek {
  name: string;
  symbol: string;
}

interface Ghs {
  name: string;
  symbol: string;
}

interface Kmf {
  name: string;
  symbol: string;
}

interface Sbd {
  name: string;
  symbol: string;
}

interface Bsd {
  name: string;
  symbol: string;
}

interface Pyg {
  name: string;
  symbol: string;
}

interface Lyd {
  name: string;
  symbol: string;
}

interface Rwf {
  name: string;
  symbol: string;
}

interface Ngn {
  name: string;
  symbol: string;
}

interface Iqd {
  name: string;
  symbol: string;
}

interface Thb {
  name: string;
  symbol: string;
}

interface Sll {
  name: string;
  symbol: string;
}

interface Cve {
  name: string;
  symbol: string;
}

interface Lsl {
  name: string;
  symbol: string;
}

interface Syp {
  name: string;
  symbol: string;
}

interface Srd {
  name: string;
  symbol: string;
}

interface Mzn {
  name: string;
  symbol: string;
}

interface Php {
  name: string;
  symbol: string;
}

interface Sar {
  name: string;
  symbol: string;
}

interface Irr {
  name: string;
  symbol: string;
}

interface Aed {
  name: string;
  symbol: string;
}

interface Uah {
  name: string;
  symbol: string;
}

interface Idr {
  name: string;
  symbol: string;
}

interface Bnd {
  name: string;
  symbol: string;
}

interface Czk {
  name: string;
  symbol: string;
}

interface Rsd {
  name: string;
  symbol: string;
}

interface Pgk {
  name: string;
  symbol: string;
}

interface Bmd {
  name: string;
  symbol: string;
}

interface Ves {
  name: string;
  symbol: string;
}

interface Ron2 {
  name: string;
  symbol: string;
}

interface Tvd {
  name: string;
  symbol: string;
}

interface Cny {
  name: string;
  symbol: string;
}

interface Lkr {
  name: string;
  symbol: string;
}

interface Ggp {
  name: string;
  symbol: string;
}

interface Tzs {
  name: string;
  symbol: string;
}

interface Fok {
  name: string;
  symbol: string;
}

interface Myr {
  name: string;
  symbol: string;
}

interface Gip {
  name: string;
  symbol: string;
}

interface Sdg {
  name: string;
}

interface Npr {
  name: string;
  symbol: string;
}

interface Uzs {
  name: string;
  symbol: string;
}

interface Fjd {
  name: string;
  symbol: string;
}

interface Mur {
  name: string;
  symbol: string;
}

interface Kid {
  name: string;
  symbol: string;
}

interface Idd {
  root?: string;
  suffixes?: string[];
}

interface Languages {
  fra?: string;
  eng?: string;
  smo?: string;
  rus?: string;
  tuk?: string;
  mya?: string;
  ara?: string;
  kon?: string;
  lin?: string;
  lua?: string;
  swa?: string;
  nld?: string;
  pap?: string;
  niu?: string;
  por?: string;
  ron?: string;
  lao?: string;
  spa?: string;
  pov?: string;
  bel?: string;
  tur?: string;
  pol?: string;
  tet?: string;
  rar?: string;
  heb?: string;
  nya?: string;
  aze?: string;
  jpn?: string;
  zho?: string;
  mah?: string;
  kor?: string;
  bis?: string;
  amh?: string;
  hun?: string;
  deu?: string;
  vie?: string;
  ber?: string;
  mey?: string;
  ben?: string;
  nrf?: string;
  lit?: string;
  dan?: string;
  sqi?: string;
  cal?: string;
  cha?: string;
  run?: string;
  gle?: string;
  kat?: string;
  bul?: string;
  isl?: string;
  slv?: string;
  prs?: string;
  pus?: string;
  bos?: string;
  hrv?: string;
  srp?: string;
  nno?: string;
  nob?: string;
  smi?: string;
  grn?: string;
  gsw?: string;
  ita?: string;
  roh?: string;
  kaz?: string;
  aym?: string;
  que?: string;
  dzo?: string;
  mkd?: string;
  ltz?: string;
  mon?: string;
  jam?: string;
  tir?: string;
  bwg?: string;
  kck?: string;
  khi?: string;
  ndc?: string;
  nde?: string;
  sna?: string;
  sot?: string;
  toi?: string;
  tsn?: string;
  tso?: string;
  ven?: string;
  xho?: string;
  zib?: string;
  mlg?: string;
  crs?: string;
  div?: string;
  som?: string;
  ssw?: string;
  tgk?: string;
  kal?: string;
  msa?: string;
  tam?: string;
  de?: string;
  sag?: string;
  nor?: string;
  hat?: string;
  swe?: string;
  bjz?: string;
  cat?: string;
  pau?: string;
  hye?: string;
  slk?: string;
  khm?: string;
  lat?: string;
  fas?: string;
  ukr?: string;
  ind?: string;
  ces?: string;
  hmo?: string;
  tpi?: string;
  nau?: string;
  tvl?: string;
  sin?: string;
  afr?: string;
  nbl?: string;
  nso?: string;
  zul?: string;
  nfr?: string;
  fao?: string;
  tkl?: string;
  hin?: string;
  pih?: string;
  nep?: string;
  uzb?: string;
  fij?: string;
  hif?: string;
  mfe?: string;
  cnr?: string;
  gil?: string;
  fil?: string;
  mri?: string;
  nzs?: string;
  lav?: string;
  tha?: string;
  arc?: string;
  ckb?: string;
  kin?: string;
  fin?: string;
  zdj?: string;
  mlt?: string;
  ell?: string;
  her?: string;
  hgm?: string;
  kwn?: string;
  loz?: string;
  ndo?: string;
  est?: string;
  ton?: string;
  urd?: string;
  glv?: string;
  kir?: string;
}

interface Translations {
  ara: Ara2;
  bre: Bre;
  ces: Ces2;
  cym: Cym;
  deu: Deu2;
  est: Est2;
  fin: Fin2;
  fra: Fra2;
  hrv?: Hrv2;
  hun: Hun2;
  ita: Ita2;
  jpn?: Jpn2;
  kor: Kor2;
  nld: Nld2;
  per?: Per;
  pol: Pol2;
  por: Por2;
  rus: Rus2;
  slk: Slk2;
  spa: Spa2;
  srp: Srp2;
  swe: Swe2;
  tur: Tur2;
  urd: Urd2;
  zho?: Zho2;
}

interface Ara2 {
  official: string;
  common: string;
}

interface Bre {
  official: string;
  common: string;
}

interface Ces2 {
  official: string;
  common: string;
}

interface Cym {
  official: string;
  common: string;
}

interface Deu2 {
  official: string;
  common: string;
}

interface Est2 {
  official: string;
  common: string;
}

interface Fin2 {
  official: string;
  common: string;
}

interface Fra2 {
  official: string;
  common: string;
}

interface Hrv2 {
  official: string;
  common: string;
}

interface Hun2 {
  official: string;
  common: string;
}

interface Ita2 {
  official: string;
  common: string;
}

interface Jpn2 {
  official: string;
  common: string;
}

interface Kor2 {
  official: string;
  common: string;
}

interface Nld2 {
  official: string;
  common: string;
}

interface Per {
  official: string;
  common: string;
}

interface Pol2 {
  official: string;
  common: string;
}

interface Por2 {
  official: string;
  common: string;
}

interface Rus2 {
  official: string;
  common: string;
}

interface Slk2 {
  official: string;
  common: string;
}

interface Spa2 {
  official: string;
  common: string;
}

interface Srp2 {
  official: string;
  common: string;
}

interface Swe2 {
  official: string;
  common: string;
}

interface Tur2 {
  official: string;
  common: string;
}

interface Urd2 {
  official: string;
  common: string;
}

interface Zho2 {
  official: string;
  common: string;
}

interface Demonyms {
  eng: Eng2;
  fra?: Fra3;
}

interface Eng2 {
  f: string;
  m: string;
}

interface Fra3 {
  f: string;
  m: string;
}

interface Maps {
  googleMaps: string;
  openStreetMaps: string;
}

interface Car {
  signs?: string[];
  side: string;
}

interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

interface CoatOfArms {
  png?: string;
  svg?: string;
}

interface CapitalInfo {
  latlng?: number[];
}

interface PostalCode {
  format: string;
  regex?: string;
}

interface Gini {
  '2013'?: number;
  '1998'?: number;
  '2017'?: number;
  '2011'?: number;
  '2012'?: number;
  '2018'?: number;
  '2010'?: number;
  '2014'?: number;
  '2019'?: number;
  '2016'?: number;
  '2015'?: number;
  '2005'?: number;
  '2009'?: number;
  '2004'?: number;
  '2008'?: number;
  '1999'?: number;
  '1992'?: number;
  '2003'?: number;
  '2006'?: number;
}
