/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

// Autodesk Forge configuration
module.exports = {
    // Set environment variables or hard-code here
    credentials: {
        client_id: process.env.FORGE_CLIENT_ID,
        client_secret: process.env.FORGE_CLIENT_SECRET,
        callback_url: process.env.FORGE_CALLBACK_URL
    },
    scopes: {
        // Required scopes for the server-side application
        internal: ['code:all', 'bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],

        // Required scopes for the server-side design automation api
        internal_2legged: ['code:all', 'bucket:create', 'bucket:read', 'data:read', 'data:create', 'data:write'],

        // Required scope for the client-side viewer
        public: ['viewables:read']
    },
    designAutomation:{
        callback_DA_Url: process.env.FORGE_WORK_ITEM_CALLBACK_URL,
        // Window family template, please change to your template URL
        revit_family_template : 'https://developer.api.autodesk.com/oss/v2/buckets/revitiosample/objects/myWindowFamily.rft',
        revit_IO_Endpoint: 'https://developer.api.autodesk.com/da/us-east/v3/',
        revit_IO_Nick_Name: 'revitiosample',
        revit_IO_App_Name: 'CreateWindowFamilyApp+prod',
        revit_IO_Activity_Name: 'CreateWindowFamilyActivity+prod',
        bim360_Item_Type : 'items:autodesk.bim360:File',
        bim360_Version_Type : 'versions:autodesk.bim360:File'
    }
};
