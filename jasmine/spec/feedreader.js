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
    describe("The menu", function() {
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

    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
