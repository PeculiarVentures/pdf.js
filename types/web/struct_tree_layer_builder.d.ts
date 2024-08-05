export type IPDFStructTreeLayerFactory = import("./interfaces").IPDFStructTreeLayerFactory;
export type StructTreeLayerBuilderOptions = {
    pdfPage: PDFPage;
};
/**
 * @implements IPDFStructTreeLayerFactory
 */
export class DefaultStructTreeLayerFactory implements IPDFStructTreeLayerFactory {
    /**
     * @param {PDFPage} pdfPage
     * @returns {StructTreeLayerBuilder}
     */
    createStructTreeLayerBuilder(pdfPage: PDFPage): StructTreeLayerBuilder;
}
/**
 * @typedef {Object} StructTreeLayerBuilderOptions
 * @property {PDFPage} pdfPage
 */
export class StructTreeLayerBuilder {
    /**
     * @param {StructTreeLayerBuilderOptions} options
     */
    constructor({ pdfPage }: StructTreeLayerBuilderOptions);
    pdfPage: PDFPage;
    render(structTree: any): HTMLSpanElement | null;
    _setAttributes(structElement: any, htmlElement: any): void;
    _walk(node: any): HTMLSpanElement | null;
}
