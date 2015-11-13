angular.module('sci-oneApp.controllers', [])

.controller('mainCtrl', function($rootScope, $scope, ngDialog) {
    $rootScope.isMenuOpen = false;
    $scope.menu = function() {
        $rootScope.isMenuOpen = !$rootScope.isMenuOpen;
    };
    $scope.items = [
        {
            avatar: './img/avatar2.png',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video_bg.jpg',
            title: "Почему бегать полезно в любом возрасте",
            time: '11.12.2015',
            tag: 'Дайджест наук'
        },
        {
            avatar: './img/avatar2.png',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video_bg.jpg',
            title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
            time: '11.12.2015',
            tag: 'Дайджест наук'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video_bg.jpg',
            title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
            time: '11.12.2015',
            tag: 'Дайджест наук'
        }
        
    ];
    $scope.open = function() {
        ngDialog.open(
            {
                template: './partials/modal.html',
                className: "ngdialog-theme-plain",
                controller: function($scope) {
                    $scope.video = {
                        avatar: './img/avatar.jpg',
                        name: 'Анна Анновна',
                        length: '05:67',
                        bookmark : false,
                        video: './img/videox.jpg',
                        title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
                        time: '11.12.2015',
                        tag: 'Дайджест наук',
                        desc: 'Вчера с космодрома на мысе Канаверал в штате Флорида состоялся успешный запуск ракеты-носителя Falcon-9 v1.1 со спутниками связи Orbcomm OG2. Этот дизайн придумала очень крутая студия дизайна, все ее зовут Флэт Студио а друзья Флататой.',
                        comments: [
                            {
                                name: 'Алексей Любимов',
                                avatar: './img/avatar.jpg',
                                time: 'Час назад',
                                comment: 'Крутяк! Вот это будущее! Жаль не во всех странах.﻿'
                            }, 
                            {
                                name: '4ivan54',
                                avatar: './img/avatar3.jpg',
                                time: 'Час назад',
                                comment: 'Бездуховные америкосы ишь чо захотели конечности как бог захотел так ибудет!!!'
                            }
                        ]
                    };
                    $scope.addComment = function(data){
                        var comment = {
                            name: 'Алексей Любимов',
                            avatar: './img/avatar.jpg',
                            time: 'Час назад',
                            comment: $scope.comment
                        };
                        $scope.video.comments.push(comment);
                        $scope.comment = '';
                    };
                }
            });
    };
})

.controller('allVideosCtrl', function($scope, ngDialog) {
    $scope.videos = [
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video1.jpg',
            title: 'Как осуществляется космическая программа в США',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video2.jpg',
            title: 'Ученые выяснили, где искать сферу Дайсона инопланетных цивилизаций',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video3.jpg',
            title: 'Средневековое снадобье убило бактерии, устойчивые к современным антибиотикам.',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video4.jpg',
            title: 'Первые фото iPhone 6C утекли в Сеть',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video5.jpg',
            title: 'Ученые: Мамонты вымерли из-за нарушения обмена веществ',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video6.jpg',
            title: 'Ученые выяснили лучшее время для домашних заданий',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video7.jpg',
            title: 'С космодрома Плесецк запустят «Рокот» с тремя «Гонцами»',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video8.jpg',
            title: 'В земной мантии обнаружился еще один слой, где плавают бывшие континенты',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video9.jpg',
            title: 'Ученые выяснили, как классика и AC/DC влияют на кошек',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : false,
            video: './img/video10.jpg',
            title: 'Подключаться к «умным» браслетам можно без ведома владельца',
            time: 'Час назад',
            tag: 'Патриотизм'
        }
    ];
    $scope.open = function() {
        ngDialog.open(
            {
                template: './partials/modal.html',
                className: "ngdialog-theme-plain",
                controller: function($scope) {
                    $scope.video = {
                        avatar: './img/avatar.jpg',
                        name: 'Анна Анновна',
                        length: '05:67',
                        bookmark : false,
                        video: './img/videox.jpg',
                        title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
                        time: '11.12.2015',
                        tag: 'Дайджест наук',
                        desc: 'Вчера с космодрома на мысе Канаверал в штате Флорида состоялся успешный запуск ракеты-носителя Falcon-9 v1.1 со спутниками связи Orbcomm OG2. Этот дизайн придумала очень крутая студия дизайна, все ее зовут Флэт Студио а друзья Флататой.',
                        comments: [
                            {
                                name: 'Алексей Любимов',
                                avatar: './img/avatar.jpg',
                                time: 'Час назад',
                                comment: 'Крутяк! Вот это будущее! Жаль не во всех странах.﻿'
                            }, 
                            {
                                name: '4ivan54',
                                avatar: './img/avatar3.jpg',
                                time: 'Час назад',
                                comment: 'Бездуховные америкосы ишь чо захотели конечности как бог захотел так ибудет!!!'
                            }
                        ]
                    };
                    $scope.addComment = function(data){
                        var comment = {
                            name: 'Алексей Любимов',
                            avatar: './img/avatar.jpg',
                            time: 'Час назад',
                            comment: $scope.comment
                        };
                        $scope.video.comments.push(comment);
                        $scope.comment = '';
                    };
                }
            });
    };
})

.controller('projectsCtrl', function($scope, ngDialog) {
    $scope.categories = [
        {
            name: 'Астрономия и космос',
            total: 56,
            videos: [
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video1.jpg',
                    title: 'Как осуществляется космическая программа в США',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video2.jpg',
                    title: 'Ученые выяснили, где искать сферу Дайсона инопланетных цивилизаций',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video3.jpg',
                    title: 'Средневековое снадобье убило бактерии, устойчивые к современным антибиотикам.',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : true,
                    video: './img/video4.jpg',
                    title: 'Первые фото iPhone 6C утекли в Сеть',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video5.jpg',
                    title: 'Ученые: Мамонты вымерли из-за нарушения обмена веществ',
                    time: 'Час назад'
                }
            ]
        },
        {
            name: 'Астрономия и космос',
            total: 56,
            videos: [
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video6.jpg',
                    title: 'Ученые выяснили лучшее время для домашних заданий',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video7.jpg',
                    title: 'С космодрома Плесецк запустят «Рокот» с тремя «Гонцами»',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video8.jpg',
                    title: 'В земной мантии обнаружился еще один слой, где плавают бывшие континенты',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : true,
                    video: './img/video9.jpg',
                    title: 'Ученые выяснили, как классика и AC/DC влияют на кошек',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video10.jpg',
                    title: 'Подключаться к «умным» браслетам можно без ведома владельца',
                    time: 'Час назад'
                }
            ]
        }
    ];
    $scope.open = function() {
        ngDialog.open(
            {
                template: './partials/modal.html',
                className: "ngdialog-theme-plain",
                controller: function($scope) {
                    $scope.video = {
                        avatar: './img/avatar.jpg',
                        name: 'Анна Анновна',
                        length: '05:67',
                        bookmark : false,
                        video: './img/videox.jpg',
                        title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
                        time: '11.12.2015',
                        tag: 'Дайджест наук',
                        desc: 'Вчера с космодрома на мысе Канаверал в штате Флорида состоялся успешный запуск ракеты-носителя Falcon-9 v1.1 со спутниками связи Orbcomm OG2. Этот дизайн придумала очень крутая студия дизайна, все ее зовут Флэт Студио а друзья Флататой.',
                        comments: [
                            {
                                name: 'Алексей Любимов',
                                avatar: './img/avatar.jpg',
                                time: 'Час назад',
                                comment: 'Крутяк! Вот это будущее! Жаль не во всех странах.﻿'
                            }, 
                            {
                                name: '4ivan54',
                                avatar: './img/avatar3.jpg',
                                time: 'Час назад',
                                comment: 'Бездуховные америкосы ишь чо захотели конечности как бог захотел так ибудет!!!'
                            }
                        ]
                    };
                    $scope.addComment = function(data){
                        var comment = {
                            name: 'Алексей Любимов',
                            avatar: './img/avatar.jpg',
                            time: 'Час назад',
                            comment: $scope.comment
                        };
                        $scope.video.comments.push(comment);
                        $scope.comment = '';
                    };
                }
            });
    };
})

.controller('categoryCtrl', function($scope, ngDialog) {
    $scope.category = 
        {
            name: 'Астрономия и космос',
            total: 56,
            videos: [
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video1.jpg',
                    title: 'Как осуществляется космическая программа в США',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video2.jpg',
                    title: 'Ученые выяснили, где искать сферу Дайсона инопланетных цивилизаций',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video3.jpg',
                    title: 'Средневековое снадобье убило бактерии, устойчивые к современным антибиотикам.',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : true,
                    video: './img/video4.jpg',
                    title: 'Первые фото iPhone 6C утекли в Сеть',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video5.jpg',
                    title: 'Ученые: Мамонты вымерли из-за нарушения обмена веществ',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video11.jpg',
                    title: 'Ученые выяснили лучшее время для домашних заданий',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video12.jpg',
                    title: 'С космодрома Плесецк запустят «Рокот» с тремя «Гонцами»',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video13.jpg',
                    title: 'В земной мантии обнаружился еще один слой, где плавают бывшие континенты',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : true,
                    video: './img/video14.jpg',
                    title: 'Ученые выяснили, как классика и AC/DC влияют на кошек',
                    time: 'Час назад'
                },
                {
                    avatar: './img/avatar.jpg',
                    name: 'Анна Анновна',
                    length: '05:67',
                    bookmark : false,
                    video: './img/video15.jpg',
                    title: 'Подключаться к «умным» браслетам можно без ведома владельца',
                    time: 'Час назад'
                }
            ]
        };
    $scope.open = function() {
        ngDialog.open(
            {
                template: './partials/modal.html',
                className: "ngdialog-theme-plain",
                controller: function($scope) {
                    $scope.video = {
                        avatar: './img/avatar.jpg',
                        name: 'Анна Анновна',
                        length: '05:67',
                        bookmark : false,
                        video: './img/videox.jpg',
                        title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
                        time: '11.12.2015',
                        tag: 'Дайджест наук',
                        desc: 'Вчера с космодрома на мысе Канаверал в штате Флорида состоялся успешный запуск ракеты-носителя Falcon-9 v1.1 со спутниками связи Orbcomm OG2. Этот дизайн придумала очень крутая студия дизайна, все ее зовут Флэт Студио а друзья Флататой.',
                        comments: [
                            {
                                name: 'Алексей Любимов',
                                avatar: './img/avatar.jpg',
                                time: 'Час назад',
                                comment: 'Крутяк! Вот это будущее! Жаль не во всех странах.﻿'
                            }, 
                            {
                                name: '4ivan54',
                                avatar: './img/avatar3.jpg',
                                time: 'Час назад',
                                comment: 'Бездуховные америкосы ишь чо захотели конечности как бог захотел так ибудет!!!'
                            }
                        ]
                    };
                    $scope.addComment = function(data){
                        var comment = {
                            name: 'Алексей Любимов',
                            avatar: './img/avatar.jpg',
                            time: 'Час назад',
                            comment: $scope.comment
                        };
                        $scope.video.comments.push(comment);
                        $scope.comment = '';
                    };
                }
            });
    };
})

.controller('profileCtrl', function($scope, ngDialog) {
    $scope.tabSelected = 1;
    $scope.videos = [
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video1.jpg',
            title: 'Как осуществляется космическая программа в США',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video2.jpg',
            title: 'Ученые выяснили, где искать сферу Дайсона инопланетных цивилизаций',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video3.jpg',
            title: 'Средневековое снадобье убило бактерии, устойчивые к современным антибиотикам.',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video4.jpg',
            title: 'Первые фото iPhone 6C утекли в Сеть',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video5.jpg',
            title: 'Ученые: Мамонты вымерли из-за нарушения обмена веществ',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video6.jpg',
            title: 'Ученые выяснили лучшее время для домашних заданий',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video7.jpg',
            title: 'С космодрома Плесецк запустят «Рокот» с тремя «Гонцами»',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video8.jpg',
            title: 'В земной мантии обнаружился еще один слой, где плавают бывшие континенты',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video9.jpg',
            title: 'Ученые выяснили, как классика и AC/DC влияют на кошек',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video10.jpg',
            title: 'Подключаться к «умным» браслетам можно без ведома владельца',
            time: 'Час назад',
            tag: 'Патриотизм'
        }
    ];
    $scope.open = function() {
        ngDialog.open(
            {
                template: './partials/modal.html',
                className: "ngdialog-theme-plain",
                controller: function($scope) {
                    $scope.video = {
                        avatar: './img/avatar.jpg',
                        name: 'Анна Анновна',
                        length: '05:67',
                        bookmark : false,
                        video: './img/videox.jpg',
                        title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
                        time: '11.12.2015',
                        tag: 'Дайджест наук',
                        desc: 'Вчера с космодрома на мысе Канаверал в штате Флорида состоялся успешный запуск ракеты-носителя Falcon-9 v1.1 со спутниками связи Orbcomm OG2. Этот дизайн придумала очень крутая студия дизайна, все ее зовут Флэт Студио а друзья Флататой.',
                        comments: [
                            {
                                name: 'Алексей Любимов',
                                avatar: './img/avatar.jpg',
                                time: 'Час назад',
                                comment: 'Крутяк! Вот это будущее! Жаль не во всех странах.﻿'
                            }, 
                            {
                                name: '4ivan54',
                                avatar: './img/avatar3.jpg',
                                time: 'Час назад',
                                comment: 'Бездуховные америкосы ишь чо захотели конечности как бог захотел так ибудет!!!'
                            }
                        ]
                    };
                    $scope.addComment = function(data){
                        var comment = {
                            name: 'Алексей Любимов',
                            avatar: './img/avatar.jpg',
                            time: 'Час назад',
                            comment: $scope.comment
                        };
                        $scope.video.comments.push(comment);
                        $scope.comment = '';
                    };
                }
            });
    };
})

.controller('bookmarksCtrl', function($scope, ngDialog) {
    $scope.videos = [
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video1.jpg',
            title: 'Как осуществляется космическая программа в США',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video2.jpg',
            title: 'Ученые выяснили, где искать сферу Дайсона инопланетных цивилизаций',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video3.jpg',
            title: 'Средневековое снадобье убило бактерии, устойчивые к современным антибиотикам.',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video4.jpg',
            title: 'Первые фото iPhone 6C утекли в Сеть',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video5.jpg',
            title: 'Ученые: Мамонты вымерли из-за нарушения обмена веществ',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video6.jpg',
            title: 'Ученые выяснили лучшее время для домашних заданий',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video7.jpg',
            title: 'С космодрома Плесецк запустят «Рокот» с тремя «Гонцами»',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video8.jpg',
            title: 'В земной мантии обнаружился еще один слой, где плавают бывшие континенты',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video9.jpg',
            title: 'Ученые выяснили, как классика и AC/DC влияют на кошек',
            time: 'Час назад',
            tag: 'Патриотизм'
        },
        {
            avatar: './img/avatar.jpg',
            name: 'Анна Анновна',
            length: '05:67',
            bookmark : true,
            video: './img/video10.jpg',
            title: 'Подключаться к «умным» браслетам можно без ведома владельца',
            time: 'Час назад',
            tag: 'Патриотизм'
        }
    ];
    $scope.open = function() {
        ngDialog.open(
            {
                template: './partials/modal.html',
                className: "ngdialog-theme-plain",
                controller: function($scope) {
                    $scope.video = {
                        avatar: './img/avatar.jpg',
                        name: 'Анна Анновна',
                        length: '05:67',
                        bookmark : false,
                        video: './img/videox.jpg',
                        title: 'Как осуществляется космическая программа в США и за ее приделами в реальнмо времени.',
                        time: '11.12.2015',
                        tag: 'Дайджест наук',
                        desc: 'Вчера с космодрома на мысе Канаверал в штате Флорида состоялся успешный запуск ракеты-носителя Falcon-9 v1.1 со спутниками связи Orbcomm OG2. Этот дизайн придумала очень крутая студия дизайна, все ее зовут Флэт Студио а друзья Флататой.',
                        comments: [
                            {
                                name: 'Алексей Любимов',
                                avatar: './img/avatar.jpg',
                                time: 'Час назад',
                                comment: 'Крутяк! Вот это будущее! Жаль не во всех странах.﻿'
                            }, 
                            {
                                name: '4ivan54',
                                avatar: './img/avatar3.jpg',
                                time: 'Час назад',
                                comment: 'Бездуховные америкосы ишь чо захотели конечности как бог захотел так ибудет!!!'
                            }
                        ]
                    };
                    $scope.addComment = function(data){
                        var comment = {
                            name: 'Алексей Любимов',
                            avatar: './img/avatar.jpg',
                            time: 'Час назад',
                            comment: $scope.comment
                        };
                        $scope.video.comments.push(comment);
                        $scope.comment = '';
                    };
                }
            });
    };
});