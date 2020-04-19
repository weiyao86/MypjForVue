<template>
	<div class="wrap">
		<div class="h-title">
			<div class="h-title-l">我的相册</div>
			<div class="h-title-r"><span><i class="fa fa-plus-circle"></i>新建相册</span></div>
		</div>
	
		<ul class="photo-list">
			<li v-for="photo in photos.my" :key="photo.id">
				<img slot="icon" :src="suf+photo.src"><div class="descript">{{photo.name}}</div>
				<div class="columns-bottom">
					<span><i class="fa fa-user"></i>2</span>
					<span><i class="fa fa-image"></i>10</span>
					<span><i class="fa fa-lock"></i>私密</span>
				</div>
			</li>
		</ul>
		<div class="h-title">
			<div class="h-title-l">我加入的</div>
		</div>

		<ul class="photo-list">
			<li v-for="photo in photos.otherPhotos" :key="photo.id">
				<img slot="icon" :src="suf+photo.src"><div class="descript">{{photo.name}}</div>
				<div class="columns-bottom">
					<span><i class="fa fa-user"></i>2</span>
					<span><i class="fa fa-image"></i>10</span>
					<span><i class="fa fa-lock"></i>私密</span>
				</div>
			</li>
		</ul>

		<mt-popup v-model="popup.show" class="mint-popup-2" :modal=false  position="top"><p>{{popup.msg}}</p></mt-popup>
	</div>
</template>
<script>

	import common from '@/lib/common';
	import {
		Indicator
	} from 'mint-ui';
	import globalConfig from '@/globalConfig';

	export default {
		name: 'Photos',
		data() {
			return {
				photos: {
					my: [],
					otherPhotos: []
				},
				popup: {
					show: false,
					msg: ''
				},
				suf: globalConfig.resoucePhotoPathsuffix

			}
		},
		beforeCreate: function() {

			Indicator.open({
				text: '加载中...',
				spinnerType: 'fading-circle'
			});
		},
		created: function() {
			var me = this;
			common.axiosBackCall({
				url: '/api/getPhotoApi',
				onSuccess: (res) => {

					me.photos.my = res.data.photos;
					me.photos.otherPhotos = res.data.otherPhotos;

					me.popup = {
						show: true,
						msg: '加载成功'
					}
				},
				onError: (err) => {

					me.popup = {
						show: true,
						msg: err.response.data.msg
					};
				},
				onCallBack:() => {
					Indicator.close();
					setTimeout(function() {
						me.popup.show = false;
					}, 1000);
				}
			});
		}
	}
</script>
<style type="text/css" lang="scss">
	.wrap{
		background: #eee;
	}
	.h-title{
		display: flex;
		padding: 20px;
		&-l{
			text-align: left;
			flex: 1;
		}
		&-r{
			text-align: right;
			color:#bbb;
			flex: 1;
			& i{padding: 0 2px;}
		}
	}

	.photo-list{
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		li{
			width:163px;
			border-radius: 6px;
			background: #fff;
			padding:10px;
			margin: 12px;
			text-align:left;
			overflow: hidden;
			text-align:center;
			.descript{
				padding:5px 0;
				font-size: 12px;
				font-weight:bold;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space:nowrap;
				text-align:left;
			}
			.columns-bottom{
				display: flex;
				text-align:left;
				&>span{
					color:#b0b0b9;
					flex:1;
					line-height: 2;
					font-size: 12px;
					&>i{
						padding:0 2px;
					}
				}
			}
			&>img{
				width:140px;
				height: 140px;
				border: 1px solid #eee;
			}
		}
	}

	.mint-popup-2 {
	    width: 100%;
	    height: 50px;
	    text-align: center;
	    background-color: rgba(0,0,0,.7);
	    -webkit-backface-visibility: hidden;
	            backface-visibility: hidden;
	}

	.mint-popup-2 p {
	    line-height: 50px;
	    color: #fff;
	}
</style>