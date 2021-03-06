templates.studentEditTpl = _.template([
    '<section class="modal-window modal_singleStudent">',
        '<section class="form-inline form-wrapper container">',

            '<div class = "row">',
                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">Group name</label>',
                    '<input name = "Group name" value = "Dp-099(Web-UI)" class = "form-control" disabled>',
                '</div>',

                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">Incoming test</label>',
                    '<input name = "Incoming test" class = "form-control incomingTest">',
                '</div>',
            '</div>',

            '<div class = "row">',
                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 firstNameInput">',
                    '<label class = "control-label">First name</label>',
                    '<input name = "FirstName" class = "form-control">',
                '</div>',

                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4 firstNameInput">',
                    '<label class = "control-label">Entry score</label>',
                    '<input name = "EntryScore" class = "form-control entryScore">',
                '</div>',
            '</div>',

            '<div class = "row">',
                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">Last name</label>',
                    '<input name = "LastName" class = "form-control">',
                '</div>',

                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">Approved by</label>',
                    '<select class = "form-control approvedBy">',
                      '<option value=Not approved">Not approved</option>',
                      '<option value=Custom>Custom</option>',
                      '<option value="Exptert #1">Exptert #1</option>',
                      '<option value="Exptert #2">Exptert #2</option>',
                      '<option value="Exptert #3">Exptert #3</option>',
                      '<option value="Exptert #4">Exptert #4</option>',
                      '<option value="Exptert #5">Exptert #5</option>',
                    '</select>',
                '</div>',
            '</div>',

            '<div class = "row">',
                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">English level</label>',
                    '<select class = "form-control englishLevel">',
                      '<option value="Intermediate">Intermediate</option>',
                      '<option value="Elementary">Elementary</option>',
                      '<option value="Pre-intermediate">Pre-intermediate</option>',
                      '<option value="Upper-intermediate">Upper-intermediate</option>',
                      '<option value="Pre-advanced">Pre-advanced</option>',
                      '<option value="Advanced">Advanced</option>',
                    '</select>',
                '</div>', 

                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label custom-approval"></label>',
                    '<input name = "CustomApproval" class = "form-control custom-approval-input" disabled>',
                '</div>',
            '</div>',

            '<div class = "row">',
                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">CV</label>',

                    '<div class = "pull-right">',
                        '<button class = "BrowseCV form-control btn btn-default active">Browse</button>',
                        '<div class = "downloadedCV hidden">',
                            '<button class = "deleteCV"></button>',
                        '</div>',
                    '</div>',
                '</div>',

                '<div class = "form-group col-xs-6 col-xs-offset-0 col-md-5 col-md-offset-1 col-lg-4">',
                    '<label class = "control-label">Photo</label>',

                    '<div class = "pull-right">',
                        '<button class = "BrowsePhoto form-control btn btn-default active">Browse</button>',
                        '<div class = "downloadedPhoto hidden">',
                            '<button class = "deletePhoto"></button>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',

            '<div class = "buttons">',
                '<button class = "save-changes fa fa-check-circle-o fa-3x btn-icon"></button>',
                '<button class = "close-modal-window fa fa-times-circle-o fa-3x btn-icon"></button>',
            '</div>',
            
        '</section>',
    '</section>',
].join(''));

// templates.studentEditTpl = _.template([
//     '<section class="modal-window modal_singleStudent">',
//         '<section class="form-inline form-wrapper container">',
//             '<div class="header-modal-singleStudent">',
//                 '<div class = "singleStudent-leftSide">',
//                     '<div>',
//                         '<span>Group name</span>',
//                         '<input name = "Group name" value = "<%= student.groupId %>" disabled>',
//                     '</div>',
//                     '<div>',
//                         '<span>First name</span>',

//                         '<% if (student.name) { debugger; %>',
//                             '<input name = "First name" value = "<%= student.name %>">',
//                         '<% } %>',

//                         '<input name = "First name">',
//                     '</div>',
//                     '<div>',
//                         '<span>Last name</span>',

//                         '<% if (student.lastName) { %>',
//                             '<input name = "Last name" value = "<%= student.lastName %>">',
//                         '<% } %>',

//                         '<input name = "Last name">',
//                     '</div>',
//                     '<div>',
//                         '<span>English level</span>',
//                         '<select>',
//                           '<option value="Intermediate (B1)">Intermediate</option>',
//                           '<option value="Elementary (A1)">Elementary</option>',
//                           '<option value="Pre-intermediate (A2)">Pre-intermediate</option>',
//                           '<option value="Upper-intermediate (B2)">Upper-intermediate</option>',
//                           '<option value="Pre-advanced (C1)">Pre-advanced</option>',
//                           '<option value="Advanced (C2)">Advanced</option>',
//                         '</select>',
//                     '</div>', 

//                     '<button class = "save-changes"></button>',
//                 '</div>',

//                 '<div class = "singleStudent-rightSide">',
//                     '<div>',
//                         '<span>Incoming score</span>',

//                         '<% if (student.entryScore) { %>',
//                             '<input name = "Incoming score" value = "<%= student.entryScore %>">',
//                         '<% } %>',

//                         '<input name = "Incoming score">',
//                     '</div>',
//                     '<div>',
//                         '<span>Approved by</span>',
//                         '<select>',
//                           '<option value=Not approved">Not approved</option>',
//                           '<option value="Exptert #1">Exptert #1</option>',
//                           '<option value="Exptert #2">Exptert #2</option>',
//                           '<option value="Exptert #3">Exptert #3</option>',
//                           '<option value="Exptert #4">Exptert #4</option>',
//                           '<option value="Exptert #5">Exptert #5</option>',
//                         '</select>',
//                     '</div>', 
//                     '<div>',
//                         '<span>CV</span>',
//                         '<button class = "BrowseCV">Browse</button>',
//                         '<div class = "downloadedCV hidden">',
//                             '<button class = "deleteCV"></button>',
//                         '</div>',
//                     '</div>',
//                     '<div>',
//                         '<span>Photo</span>',
//                         '<button class = "BrowsePhoto">Browse</button>',
//                         '<div class = "downloadedPhoto hidden">',
//                             '<button class = "deletePhoto"></button>',
//                         '</div>',
//                     '</div>',

//                     '<button class = "close-modal-window"></button>',
//                 '</div>',
// ].join(''));