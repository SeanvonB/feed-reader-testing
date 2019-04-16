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
            menu.click(); // Show menu
            expect(body.classList.contains("menu.hidden")).toBe(false);
            menu.click(); // Hide menu; return page to default state
        });
    });

    // This suite tests loadFeed to ensure that entries load
    describe("Initial entries", function() {
        let entry;
        
        beforeEach(function(done) {
            loadFeed(0, function() {
                entry = document.querySelector(".feed .entry");
                done();
            });
        });

        it("finish loading", function() {
            expect(entry).toBeDefined();
        });
    });

    // This suite tests content changes in new feeds
    describe("Feed changes", function() {
        let feedInitial;
        let feedNew;

        // Load a feed and save its first article
        beforeEach(function(done) {
            loadFeed(0, function() {
                feedInitial = document.querySelector(".feed").innerHTML;
                loadFeed(1, function() {
                    feedNew = document.querySelector(".feed").innerHTML;
                    done();
                });
            });
        });

        // Load the next feed, save its first article, then compare
        it("finish loading", function(done) {
            loadFeed(1, function() {
                expect(feedInitial === feedNew).toBe(false);
                done();
            });
        });

        // Load first feed again; return page to initial state
        afterEach(function(done) {
            loadFeed(0, done);
        })
    });
}());
