<template>
	<div id="oc-head" class="uk-position-top uk-position-fixed uk-position-z-index" uk-navbar="mode: click">
		<div class="uk-navbar-left">
			<ul class="uk-navbar-nav">
				<li>
					<a href="#" uk-toggle="target: #oc-nav">
						<i class="material-icons uk-margin-small-right uk-text-inverse">menu</i>
						<span class="uk-text-inverse">Files</span>
					</a>
				</li>
			</ul>
		</div>
		<div class="uk-position-center">
			<div id="oc-logo-main" class="uk-flex uk-flex-middle">
				<div class="uk-width-1-2 uk-text-right">
					<img src="core/gfx/cloud-logo-invert.svg" alt="ownCloud" height="45" width="80">
				</div>
				<span class="uk-width-1-2 uk-text-left uk-text-inverse">ownCloud</span>
			</div>
		</div>
		<div class="uk-navbar-right">
			<ul class="uk-navbar-nav">
				<component v-for="(plugin, pid) in extendNavbarRight" :is="plugin.component" :key="pid" v-if="extendNavbarRight.length > 0"></component>
				<li v-if="isAnonymous">
					<a href="#" @click.prevent="requestLogin"><span class="uk-text-inverse uk-visible@s">Login</span></a>
				</li>
				<li v-else>
					<a href="#" :uk-tooltip="user.email"><i class="material-icons uk-margin-small-right uk-text-inverse">account_circle</i><span class="uk-text-inverse uk-visible@s">{{ user.displayname }}</span></a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>

const _isEmpty = require('lodash/isEmpty');

import pluginHelper from '../mixins/pluginHelper.js';

export default {
	methods : {
		requestLogin () {
			this.$events.emit('phoenix:request-login');
		}
	},
	mixins : [
		pluginHelper
	],
	computed : {
		isAnonymous () {
			return _isEmpty(this.user.displayname);
		},
		extendNavbarRight () {
			return this.getPlugins('phoenixNavbarRight');
		},
		user () {
			return this.$store.state.user;
		}
	}
};
</script>
