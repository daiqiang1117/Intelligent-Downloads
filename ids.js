// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Show all information of file before it created
var PropertiesCount = 7;

// var Info = {"id", "url", "referrer", "filename", "mime", "byExtensionID", "byExtentionName"};

var FileInfo = {
	id              : ""
	url             : ""
	referrer        : ""
	filename        : ""
	mime            : ""
	byExtensionID   : ""
	byExtentionName : ""
};

var DownloadInfoGenerator = {
	/**
	 *get the file information from chome.downloads API
	 *and show on the popup area
	 */

	getFileInfo: function(){
		chrome.downloads.Downloaditem
	},

	showFileInfo_: function(){

	},

	constructFileInfo_: function(){
		for(var property in FileInfo){
			if(FileInfo.hasOwnProperty(property)){
				//if there is a inner object in FileInfo object, do special stuff
			}
			FileInfo[property] = chrome.downloads.Downloaditem.property;
		}
	}
};

chrome.downloads.onCreated.addListener('DOMContentLoaded', function () {
	DownloadInfoGenerator.getFileInfo();
});
