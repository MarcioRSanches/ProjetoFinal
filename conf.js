const SpecReporter = require('jasmine-spec-reporter').SpecReporter
//const HtmlReporter = require('protractor-beautiful-reporter')

exports.config = {
	// desabilita o control flow do Selenium
	SELENIUM_PROMISE_MANAGER: false,

	// acessa diretamente o navegador
	// ignora a necessidade de subir um servidor selenium
	directConnect: true,

	// define a url base do projeto
    //baseUrl: 'https://the-internet.herokuapp.com',
	
	// define as suítes de teste
	suites: {
		main: 'specs/*2-spec.js'
	},

	// configurações gerais para antes de iniciar os testes
	onPrepare: function () {
		// ignora a espera por angular
		
		browser.ignoreSynchronization=true;										

		// define o tempo de espera implícita
		browser.manage().timeouts().implicitlyWait(20000)

		// define configurações para o report HTML do jasmine
		//  jasmine.getEnv().addReporter(new HtmlReporter({
		//  	baseDirectory: './reports/',
		//  	preserveDirectory: true
		//  }).getJasmine2Reporter())

		// define configurações para o report do jasmine no console
		jasmine.getEnv().addReporter(new SpecReporter({
			displayFailuresSummary: true,
			displayFailedSpec: true,
			displaySuiteNumber: true,
			displaySpecDuration: true
		}))
	},

	// define configurações para o navegador que será usado
	capabilities: {
		'browserName': 'chrome',
//		shardTestFiles: true,
// 		maxInstances: 5,
		'goog:chromeOptions': {
			args: [
				// '--headless',
				// '--window-size=1300,790',
				// '--disable-infobars',
                '--incognito',
                '--start-fullscreen'
			]
		},
	},

	// configurações específicas do jasmine
	jasmineNodeOpts: {
		onComplete: null,
		showTiming: true,
		realtimeFailure: true,
		showColors: true,
		defaultTimeoutInterval: 10000000,
		isVerbose: true
	}
}