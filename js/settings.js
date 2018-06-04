var settings = {};

settings.data = {};

settings.init = function(oSettingsData) {

	settings.data = oSettingsData;
	
}

settings.get = function(sSettingsName) {

	return settings.data[sSettingsName];

}