let details = navigator.userAgent;
let regexp = /android|iphone/i;
let isMobileDevice = regexp.test(details);

if (isMobileDevice) {
    document.write("mobile")
}
