define('tests/unit/basic',
    ['elements/nav'],
    function(elementsNav) {

    describe('<mkt-nav>', function() {
        function assertNavVisible(statusEl) {
            assert(statusEl.classList.contains('mkt-nav--visible'),
                   'nav should be visible');
        }
        function assertNavHidden(statusEl){
            assert(!statusEl.classList.contains('mkt-nav--visible'),
                   'nav should be hidden');
        }

        it('can toggle visibility', function() {
            var nav = document.createElement('mkt-nav');
            var statusEl = document.createElement('div');
            nav.$statusElement = statusEl;

            assertNavHidden(statusEl);
            nav.toggle();
            assertNavVisible(statusEl);
            nav.toggle();
            assertNavHidden(statusEl);
        });

        it('can force visibility', function() {
            var nav = document.createElement('mkt-nav');
            var statusEl = document.createElement('div');
            nav.$statusElement = statusEl;

            assertNavHidden(statusEl);
            nav.toggle(true);
            assertNavVisible(statusEl);
            nav.toggle(true);
            assertNavVisible(statusEl);
            nav.toggle(false);
            assertNavHidden(statusEl);
            nav.toggle(false);
            assertNavHidden(statusEl);
        });
    });
});
