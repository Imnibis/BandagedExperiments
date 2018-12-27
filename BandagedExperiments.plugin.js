//META{"name":"BandagedExperiments","source":"https://github.com/Imnibis/BandagedExperiments/blob/master/BandagedExperiments.plugin.js"}*//

class BandagedExperiments {
	
    getName() { return "BandagedExperiments"; }
    getDescription() { return "BandagedBD plugin that enables discord's preview features - ported from Experiments, a plugin for EnhancedDiscord."; }
    getVersion() { return "1.0"; }
	getAuthor() { return "Imnibis"; }

    load() {}

    start() {		
		this.findModule('isDeveloper').__proto__ = {
            constructor: this.findModule('isDeveloper').__proto__,
            getExperimentDescriptor: this.findModule('isDeveloper').__proto__.getExperimentDescriptor,
            isDeveloper: true,
            __proto__: this.findModule('isDeveloper').__proto__.__proto__
        }
	}
	
	findModule(module, silent) {
		var req = webpackJsonp.push([[], {
			'__extra_id__': (module, exports, req) => module.exports = req
		}, [['__extra_id__']]]);
		delete req.m['__extra_id__'];
		delete req.c['__extra_id__'];
        for (let i in req.c) {
            if (req.c.hasOwnProperty(i)) {
                let m = req.c[i].exports;
                if (m && m.__esModule && m.default && m.default[module] !== undefined)
                    return m.default;
                if (m && m[module] !== undefined)
                    return m;
            }
        }
        if (!silent) c.warn(`Could not find module ${module}.`, {name: 'Modules', color: 'black'});
        return null;
    }
	
    stop() {
        this.findModule('isDeveloper').__proto__.isDeveloper = false;
	}
	
}
