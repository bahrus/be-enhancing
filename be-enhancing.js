// @ts-check
import { propInfo, rejected, resolved } from 'be-enhanced/cc.js';
import { BE } from 'be-enhanced/BE.js';
import {dispatchEvent as de} from 'trans-render/positractions/dispatchEvent.js';
/** @import {BEConfig, IEnhancement, BEAllProps} from './ts-refs/be-enhanced/types.d.ts' */
/** @import {Actions, ProPAP, PAP, AllProps, AP, BAP} from './ts-refs/be-enhancing/types' */

/**
 * @implements {Actions}
 * 
 */
class BeEnhancing extends BE {
    /**
     * @type {BEConfig<AP & BEAllProps, Actions & IEnhancement>}
     */
    static config = {
        propInfo: {
            ...propInfo,
            parsedStatements: {},
            rawStatements: {},
        },
        positractions: [resolved, rejected],
        compacts:{
            when_parsedStatements_changes_call_hydrate: 0,
        }
    }

    de = de;

    /**
     * 
     * @param {BAP} self 
     * @returns 
     */
    async hydrate(self){
        const {parsedStatements, enhancedElement} = self;
        const {find} = await import('trans-render/dss/find.js');
        const {whenResolved} = await import('be-hive/whenResolved.js');
        for(const parsedStatement of parsedStatements){
            const {localSpecifier, remoteSpecifier, remotePropertyPath, enhancementBase} = parsedStatement;
            const remoteEl = await find(enhancedElement, remoteSpecifier);
            if(!(remoteEl instanceof Element)) throw 404;
            
            const enhancement = await whenResolved(remoteEl, enhancementBase);
            let {prop, ish} = localSpecifier;
            if(prop === undefined) continue;
            let destObj = enhancedElement;
            if(ish){
                const {waitForIsh} = await import('mount-observer/waitForIsh.js');
                destObj = await waitForIsh(enhancedElement)
            }
            if(remotePropertyPath === undefined){
                (await import('trans-render/lib/setProp.js')).setProp(enhancedElement, prop, enhancement);
            }else{
                new (await import('trans-render/asmr/BeLinked.js')).BeLinked(
                    enhancement, remotePropertyPath, destObj, prop
                );

            }
            
        }
        return /** @type {PAP} */({
            resolved: true,
        })
    }


}

await BeEnhancing.bootUp();
export { BeEnhancing };