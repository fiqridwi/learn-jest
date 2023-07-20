export type stringInfo = {
	lowerCase: string;
	upperCase: string;
	characters: string[];
	length: number;
	extraInfo: Object | undefined;
};
type LoggerServiceCallBack = (arg: string) => void;
export function calculateComplexity(stringInfo: stringInfo): number {
	return Object.keys(stringInfo.extraInfo).length * stringInfo.length;
}

export function toUpperCaseWithCb(arg: string, callBack: LoggerServiceCallBack) {
	if (!arg) {
		callBack("Invalid argument");
		return;
	}
	callBack(`call function with ${arg}`);
	return arg.toUpperCase();
}
