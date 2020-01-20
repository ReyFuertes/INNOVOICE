export class PageAction {
  public addBtnText?: string;
  public iconName?: string;
  public addFn?: () => void;
  public importFn?: () => void;
  public exportFn?: () => void;
  public backBtnText?: string;
  public backFn?: () => void;
  constructor(
    addBtnText: string, 
    iconName: string,
    backBtnText: string,
    addAction: () => void, 
    importFn: () => void,
    exportFn: () => void,
    backFn: () => void) {
    this.addBtnText = addBtnText;
    this.iconName = iconName;
    this.addFn = addAction;
    this.importFn = importFn;
    this.exportFn = exportFn;
    this.backBtnText = backBtnText;
    this.backFn = backFn;
  }
}