describe('less than 64 bytes', function() {
  it('should be successful', function() {
    expect(md5('')).to.be('d41d8cd98f00b204e9800998ecf8427e');
  });
});
