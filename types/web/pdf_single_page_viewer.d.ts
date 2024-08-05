export class PDFSinglePageViewer extends BaseViewer {
    constructor(options: any);
    get _viewerElement(): any;
    get _pageWidthScaleFactor(): number;
    _previousPageNumber: any;
    _shadowViewer: DocumentFragment | undefined;
    _updateScrollDown: any;
    _ensurePageViewVisible(): void;
    _getVisiblePages(): {
        views: never[];
        first?: undefined;
        last?: undefined;
    } | {
        first: {
            id: any;
            x: any;
            y: any;
            view: any;
        };
        last: {
            id: any;
            x: any;
            y: any;
            view: any;
        };
        views: {
            id: any;
            x: any;
            y: any;
            view: any;
        }[];
    };
    get _isScrollModeHorizontal(): any;
    _updateScrollMode(): void;
    _updateSpreadMode(): void;
    _getPageAdvance(): number;
}
import { BaseViewer } from "./base_viewer.js";
