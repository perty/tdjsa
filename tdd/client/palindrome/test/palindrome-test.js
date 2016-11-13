describe('palindrome-test', function() {
    it('should pass this canary test', function() {
        expect(true).to.eql(true);
    });

    it('mom is a palindrome', function() {
        var aWord = 'mom';
        var result = isPalindrome(aWord);
        expect(result).to.eql(true);
    });

    it('dude is not a palindrome', function() {
        var aWord = 'dude';
        var result = isPalindrome(aWord);
        expect(result).to.eql(false);
    });

    it('mom mom is a palindrome', function() {
        var aWord = 'mom mom';
        var result = isPalindrome(aWord);
        expect(result).to.eql(true);
    });

    it('mom dad is not a palindrome', function() {
        var aWord = 'mom dad';
        var result = isPalindrome(aWord);
        expect(result).to.eql(false);
    });

    it('an empty string is not a palindrome', function() {
        var aWord = '';
        var result = isPalindrome(aWord);
        expect(result).to.eql(false);
    });

    it('white space is not a palindrome', function() {
        var aWord = '  ';
        var result = isPalindrome(aWord);
        expect(result).to.eql(false);
    });

    it('should throw an exception if argument is missing', function() {
        var call = function() { isPalindrome(); };
        expect(call).to.throw(Error, 'Invalid argument');
    });
});
