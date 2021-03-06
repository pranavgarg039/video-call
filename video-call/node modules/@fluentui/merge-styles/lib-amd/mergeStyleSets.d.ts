import { IStyleOptions } from './IStyleOptions';
import { IProcessedStyleSet, IStyleSet } from './IStyleSet';
import { ObjectOnly } from './ObjectOnly';
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSet - The first style set to be merged and reigstered.
 */
export declare function mergeStyleSets<TStyleSet>(styleSet: TStyleSet | false | null | undefined): IProcessedStyleSet<ObjectOnly<TStyleSet>>;
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSet1 - The first style set to be merged.
 * @param styleSet2 - The second style set to be merged.
 */
export declare function mergeStyleSets<TStyleSet1, TStyleSet2>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined): IProcessedStyleSet<ObjectOnly<TStyleSet1> & ObjectOnly<TStyleSet2>>;
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSet1 - The first style set to be merged.
 * @param styleSet2 - The second style set to be merged.
 * @param styleSet3 - The third style set to be merged.
 */
export declare function mergeStyleSets<TStyleSet1, TStyleSet2, TStyleSet3>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined): IProcessedStyleSet<ObjectOnly<TStyleSet1> & ObjectOnly<TStyleSet2> & ObjectOnly<TStyleSet3>>;
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSet1 - The first style set to be merged.
 * @param styleSet2 - The second style set to be merged.
 * @param styleSet3 - The third style set to be merged.
 * @param styleSet4 - The fourth style set to be merged.
 */
export declare function mergeStyleSets<TStyleSet1, TStyleSet2, TStyleSet3, TStyleSet4>(styleSet1: TStyleSet1 | false | null | undefined, styleSet2: TStyleSet2 | false | null | undefined, styleSet3: TStyleSet3 | false | null | undefined, styleSet4: TStyleSet4 | false | null | undefined): IProcessedStyleSet<ObjectOnly<TStyleSet1> & ObjectOnly<TStyleSet2> & ObjectOnly<TStyleSet3> & ObjectOnly<TStyleSet4>>;
/**
 * Takes in one or more style set objects, each consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeStyles` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 */
export declare function mergeStyleSets(...styleSets: Array<IStyleSet | undefined | false | null>): IProcessedStyleSet<any>;
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
export declare function mergeCssSets<TStyleSet>(styleSets: [TStyleSet | false | null | undefined], options?: IStyleOptions): IProcessedStyleSet<TStyleSet>;
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
export declare function mergeCssSets<TStyleSet1, TStyleSet2>(styleSets: [TStyleSet1 | false | null | undefined, TStyleSet2 | false | null | undefined], options?: IStyleOptions): IProcessedStyleSet<TStyleSet1 & TStyleSet2>;
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
export declare function mergeCssSets<TStyleSet1, TStyleSet2, TStyleSet3>(styleSets: [
    TStyleSet1 | false | null | undefined,
    TStyleSet2 | false | null | undefined,
    TStyleSet3 | false | null | undefined
], options?: IStyleOptions): IProcessedStyleSet<TStyleSet1 & TStyleSet2 & TStyleSet3>;
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
export declare function mergeCssSets<TStyleSet1, TStyleSet2, TStyleSet3, TStyleSet4>(styleSets: [
    TStyleSet1 | false | null | undefined,
    TStyleSet2 | false | null | undefined,
    TStyleSet3 | false | null | undefined,
    TStyleSet4 | false | null | undefined
], options?: IStyleOptions): IProcessedStyleSet<ObjectOnly<TStyleSet1> & ObjectOnly<TStyleSet2> & ObjectOnly<TStyleSet3> & ObjectOnly<TStyleSet4>>;
/**
 * Takes in one or more style set objects, each1consisting of a set of areas,
 * each which will produce a class name. Using this is analogous to calling
 * `mergeCss` for each property in the object, but ensures we maintain the
 * set ordering when multiple style sets are merged.
 *
 * @param styleSets - One or more style sets to be merged.
 * @param options - (optional) Options to use when creating rules.
 */
export declare function mergeCssSets<TStyleSet>(styleSet: [TStyleSet | false | null | undefined], options?: IStyleOptions): IProcessedStyleSet<TStyleSet>;
