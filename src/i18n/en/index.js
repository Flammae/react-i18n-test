// @ts-check
/* eslint-disable */

/**
 * @typedef { import('../i18n-types').BaseTranslation } BaseTranslation
 */

/** @type { BaseTranslation } */
const en = {
	app: {
		decrement: 'Decrement',
		exchange: 'Exchange',
		increment: 'Increment',
		deposit: 'Deposit',
		send: 'Send',
		swap: 'Swap',
		reset: 'Reset',
	},
	currency: {
		bch: 'Bitcoin cash',
		btc: 'Bitcoin',
		busd: 'Binance USD',
		chz: 'chiliZ',
		doge: 'Dogecoin',
		enj: 'EnjinCoin',
		eth: 'Ethereum',
		link: 'Chainlink',
		ltc: 'Litecoin',
		mkr: 'Maker',
		omg: 'OmiseGO',
		reef: 'Reef',
		shib: 'Shiba Inu',
		snx: 'Synthetix',
		uni: 'Uniswap',
		usdc: 'USD Coin',
		usdt: 'Tether',
		vet: 'VeChain',
		xlm: 'Stellar',
		xrp: 'Ripple',
		zrx: '0X',
		trx: 'Tron',
		usd: 'United States Dollar',
		gbp: 'Pound Sterling',
		eur: 'Euro',
		uah: 'Ukrainian Hryvnia',
		rub: 'Russian Ruble',
		gel: 'Georgian Lari',
	},
	month: {
		'10': 'October',
		'11': 'November',
		'12': 'December',
		'01': 'January',
		'02': 'February',
		'03': 'March',
		'04': 'April',
		'05': 'May',
		'06': 'June',
		'07': 'July',
		'08': 'August',
		'09': 'September',
	},
	navbar: {
		exchange: 'Exchange',
		explorer: 'Explorer',
		markets: 'Markets',
		myWallets: 'My Wallets',
		overview: 'Main',
		transactions: 'Transactions',
	},
	settings: {
		darkTheme: 'Dark Theme',
		general: 'General',
		lightTheme: 'Light Theme',
		profile: 'Profile',
		security: 'Security',
		signout: 'Sign out',
	},
	general: {
		overview: 'Overview',
		balance: 'Balance',
		myWallets: 'My Wallets',
		transactions: 'Transactions',
		allAvailableCurrencies: 'All Available Currencies',
		crypto: 'Crypto',
		fiat: 'Fiat',
		latestTransactions: 'Latest Transactions',
		loadingTransactions: 'Loading Transactions...',
		noTransactions: 'No Transactions Yet',
		type: 'Type',
		currency: 'Currency',
		across: 'across',
		wallets: 'wallets',
		coin: 'Coin',
		selectOption: 'Select an option...',
	},
	transactions: {
		operations: 'Operations',
		status: 'Status',
		date: 'Date',
		amount: 'Amount',
		withdrawal: 'Withdrawal',
		deposit: 'Deposit',
		swap: 'Swap',
		invoice: 'Invoice',
		success: 'Success',
		pending: 'Pending',
		fail: 'Fail',
	},
	explorer: {
		searchPlaceholder: 'Search Transactions, Addresses, Blocks',
		exchangeRates: 'Exchange Rates',
		data: {
			transactionHash: 'Transaction hash',
			additionalInfo: 'Additional Info',
			description: 'Description',
			confirmation: 'confirmation',
			inputs: 'Inputs',
			outputs: 'Outputs',
			confirmations: 'confirmations',
		},
		summary: {
			success1: 'This transaction was successful,',
			ledger: 'and validated in ledger',
			date: 'Date:',
			successValidation: 'This transaction was successful, and validated in ledger:',
			success2: 'This transaction was successful, on',
			amount: 'Amount Transacted:',
			fee: 'Fee:',
			createdAt: 'Created at:',
			confirmations: 'Confirmations:',
		},
		details: {
			transactionType: 'Transaction Type:',
			fees: 'Fees:',
			createdAt: 'Created At:',
			blockHash: 'Block Hash:',
			gasPrice: 'Gas Price:',
			gasUsed: 'Gas Used:',
			size: 'Size:',
			version: 'Version:',
			weight: 'Weight:',
			locktime: 'Locktime:',
			transactionHash: 'Transaction hash',
			transactionId: 'Transaction ID',
			amount: 'Amount:',
		},
		showLess: 'Show less',
		showMore: 'Show more',
	},
	exchange: {
		balance: 'Balance',
		destinationAddress: 'Destination address',
		amount: 'Amount',
		amountUsd: '=Amount, USD',
		description: 'Description (optional)',
		advanced: {
			'0': 'Advanced',
			standardFee: 'Standard',
			mediumFee: 'Medium',
			highFee: 'High',
			optionSelect: 'Select an option...',
		},
		transactionFee: 'Transaction fee',
		networkStandard: 'Network standard',
		depositCurrency: 'Deposit currency',
		depositAddress: 'deposit using an address',
		paymentLink: '... or request a payment with a shareable link',
		userEmail: 'PaybitX.com user email',
		from: 'From',
		to: 'To',
		sendAmount: 'Send amount',
		receiveAmount: 'Receive amount',
		chooseBalance: 'Choose a balance to start',
		descriptionPlaceholder: "What's this transaction for?",
		deposit: {
			shareableLink: 'Create a shareable link',
		},
		detailedFee: {
			amount: 'Entered Amount',
			fee: 'Transaction Fee',
			netAmount: 'Net Amount',
		},
		chooseCurrency: 'Choose a currency to start',
		sendP2P: 'Send P2P',
		noDepositMessage: 'Please Deposit a Currency to use This Function',
		errors: {
			chooseBalance: 'Please choose a balance',
			address: 'Please enter a destination address',
			amount: 'Please enter an amount',
			amountPositive: 'Please make sure the amount is positive',
			email: 'Please enter a valid email address',
			currency: 'Please choose a currency',
		},
		serverErrors: {
			address: 'Incorrect address input',
			funds: 'Insufficient funds',
			generic: "There's been an unexpected error and we are already working on it. Please try again later.",
			insufficientCoin: 'You have insufficient "{Coin}" to complete this transaction',
			email: "Provided email doesn't belong to any user",
			rates: 'Unable to fetch reliable rates at this time, please try again later.',
			ratesSource: 'No reliable rates source available, please try again later.',
		},
		quickExchange: {
			header: 'Quick Exchange',
			close: 'Close',
		},
	},
	security: {
		'2faHeader': 'Two-Factor Authentication',
		status: 'Status',
		'2faDescription': "Increase your account's security by enabling Two-Factor Authentication",
		'2faEnable': 'Enable Two-Factor Authentication',
		'2faEdit': 'Edit Two-Factor Authentication',
		ipHeader: 'IP Whitelist',
		ipManage: 'Manage IP Whitelist',
		apiHeader: 'API Keys',
		apiManage: 'Manage Api Keys',
		'2fa': {
			registrationHeader: 'Register Two-Factor Authenticator',
			registrationDescription: 'Use a one time password authenticator on your mobile device or computer to enable two-factor authentication (2FA).',
			guideActivated: "You've already enabled two-factor authentication using one time password authenticators. You can use the same authenticator to disable it. ",
			disable: 'Disable With Two-Factor App',
			guideUnactivated: 'Install a soft token authenticator like {FreeOTP} or {GoogleAuthenticator} from your application repository and use that app to scan this QR code. More information is available in the documentation.',
			enable: 'Register With Two-Factor App',
			newAuthenticatorHeader: 'Register a New Authenticator',
			newAuthenticatorDescription: 'Use a pin from existing authenticator to unlock a QR code for setting up a new 2FA device.',
			newUnactivatedMessage: 'You need to register a two-factor authentication app before you can set up another device.',
			newSetUp: 'Set Up a New Device',
			ipHeader: 'Whitelisted IP List',
			ipList: 'No whitelisted IP address was found',
			ipAddress: 'IP Address',
			ipAdd: 'Add To Whitelist',
			apiHeader: 'Created API Keys',
			apiList: 'No API key was found',
			apiGenerate: 'Generate a New API Key',
		},
		pin: 'PIN Code',
		enabled: 'Enabled',
		disabled: 'Disabled',
	},
}

module.exports = en