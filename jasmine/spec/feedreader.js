/* This is the spec file that Jasmine will read and contains
all of the tests that will be run against your application. */

/* We're placing all of our tests within the $() function,
since some of these tests may require DOM elements. We want
to ensure they don't run until the DOM is ready. */

$(function() {
    // This suite tests definitions in allFeeds
    describe('RSS feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        it("have defined URLs", function() {
            for (let feed of allFeeds) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            }
        });


        it("have defined names", function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            }
        });
    });

    // This suite tests menu show/hide functionality
    describe("Menu", function() {
        let body = document.querySelector("body");
        let menu = document.querySelector(".menu-icon-link");

        it("defaults to hidden", function() {
            expect(body.classList.contains("menu-hidden")).toBe(true);
        });

        it("toggles show/hide on click", function () {
            menu.click();
            expect(body.classList.contains("menu.hidden")).toBe(false);
        });
    });

    // This suite tests loadFeed to ensure that entries load
    describe("Initial entries", function() {
        let feed = document.querySelector(".feed");

        // Credit to Matthew Cranford: https://matthewcranford.com
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it("finish loading", function() {
            expect(feed.children.length > 0).toBe(true);
        })
    });

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
