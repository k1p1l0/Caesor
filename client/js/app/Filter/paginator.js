'use strict';

(function (This) {

    This.PaginatorView = Backbone.View.extend({
        template: templates.paginatorTpl,
        page: 0,
        lastPage: 0,
        pageElems: [],
        className: 'paginator',

        events: {
            'click .left-nav': 'openPrevPage',
            'click .right-nav': 'openNextPage'
        },

        initialize: function () {
            this.splitCollection();
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            $('.page-nav').html(this.page + 1 + '   /   ' + this.lastPage);    //will be in template
            this.lastPage === 1? this.$el.addClass('invisible') : this.$el.removeClass('invisible');
            this.giveBackCollection(this.pageElems[this.page]);
            return this;
        },

        openPrevPage: function () {
            if (this.page !== 0) {
                this.page--;
                $('.page-nav').html(this.page + 1 + ' / ' + this.lastPage);
                this.render();
            }
        },

        openNextPage: function () {
            if (this.page + 1 !== this.lastPage) {
                this.page++;
                $('.page-nav').html(this.page + 1 + '   /   ' + this.lastPage);
                this.render();
            }
        },

        splitCollection: function () {    //make array of arrays with 10 models inside from all collection;
            var chunk;

            this.tmp = this.collection.slice();
            this.pageElems = [];
            while (this.tmp.length > 0) {
                chunk = this.tmp.splice(0, 10);
                this.pageElems.push(chunk);
            }

            this.lastPage = this.pageElems.length;
        },

        giveBackCollection: function(collection) {
            app.mediator.publish('Paginator: collection-divided', collection);
        }
    });
})(app);