// @ts-check
import { BeHive, MountObserver, seed } from 'be-hive/be-hive.js';
/** @import {AP} from './ts-refs/be-enhancing/types'; */
/** @import {EMC} from './ts-refs/trans-render/be/types' */

const remoteSpecifierStringSetLocalProp = 
    String.raw `^(?<remoteSpecifierString>.*) with (?<enhancementBase>.*) and set (?<localSpecifierString>.*)`;

const remoteSpecifierStringSetLocalPropToRemoteProp = String.raw `${remoteSpecifierStringSetLocalProp} to (?<remotePropertyPath>.*)`;

/**
 * @type {[string, string]}
 */
const rssTors = ['remoteSpecifierString', 'remoteSpecifier'];
/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    base: 'be-enhancing',
    enhPropKey: 'beEnhancing',
    importEnh: async () => {
        const { BeEnhancing } = await import('./be-enhancing.js');
        return BeEnhancing;
    },
    map: {
        '0.0': {
            instanceOf: 'Object$entences',
            objValMapsTo: '.',
            regExpExts: {
                parsedStatements: [
                    {
                        regExp: remoteSpecifierStringSetLocalPropToRemoteProp,
                        defaultVals: {},
                        dssKeys: [['remoteSpecifierString', 'remoteSpecifier'], ['localSpecifierString', 'localSpecifier']],
                    },
                    {
                        regExp: remoteSpecifierStringSetLocalProp,
                        defaultVals: {},
                        dssKeys: [['remoteSpecifierString', 'remoteSpecifier'], ['localSpecifierString', 'localSpecifier']],
                    }
                ]
            }
        }
    }
};

const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);