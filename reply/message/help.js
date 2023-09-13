const {makeHelpMessagePanelText} = require(`./text/index/help.js`);
const {makeHelpMessagePanelInlineKeyboard} = require(`./reply_markup/inlineKeyboard/index/help.js`);

const getHelpMessagePanel = (languageCode, tg_user_id, selectedPage = 1) => {
	const message = makeHelpMessagePanelInlineKeyboard(languageCode, selectedPage, tg_user_id);
	message.text = makeHelpMessagePanelText(languageCode, selectedPage);
	message.parse_mode = 'HTML';

	return message;
}; 
exports.getHelpMessagePanel = getHelpMessagePanel;
