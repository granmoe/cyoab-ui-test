define(['backbone', 'dust', 'text!templates/app.dust'],
	function(Backbone, Dust, AppTemplate){
		var AppView = Backbone.View.extend({
			el: "#app",
			initialize: function() {
				var compiled = Dust.compile(AppTemplate, "app_tmpl");
		        Dust.loadSource(compiled);
				this.render();
			},
			render: function() {
				var self = this;
				var ctx = {};
				Dust.render("app_tmpl", ctx, function(err, out){
					if (err) {
						console.log(err);
					} else {
						self.$el.html(out);
					}
				});
			}
		});
		return AppView;
	})