if (self.CavalryLogger) { CavalryLogger.start_js(["pb+f9EO"]); }

__d("UFICommonInteractionEvents",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({UFI_OPTIMISTIC_COMMENT:"UFIOptimisticComment",UFI_PERSISTED_COMMENT:"UFIPersistedComment",UFI2_OPTIMISTIC_COMMENT:"UFI2OptimisticComment",UFI2_PERSISTED_COMMENT:"UFI2PersistedComment",COMET_UFI_OPTIMISTIC_COMMENT:"CometUFIOptimisticComment",COMET_UFI_PERSISTED_COMMENT:"CometUFIPersistedComment",UFI2_OPTIMISTIC_COMMENT_EDIT:"UFI2OptimisticCommentEdit",UFI2_PERSISTED_COMMENT_EDIT:"UFI2PersistedCommentEdit",COMET_UFI_OPTIMISTIC_COMMENT_EDIT:"CometUFIOptimisticCommentEdit",COMET_UFI_PERSISTED_COMMENT_EDIT:"CometUFIPersistedCommentEdit",UFI_TOP_LEVEL_COMMENTS_PAGINATION:"UFITopLevelCommentsPagination",UFI2_TOP_LEVEL_COMMENTS_PAGINATION:"UFI2TopLevelCommentsPagination",COMET_UFI_TOP_LEVEL_COMMENTS_PAGINATION:"CometUFITopLevelCommentsPagination",UFI2_REPLY_COMMENTS_PAGINATION:"UFI2ReplyCommentsPagination",COMET_UFI_REPLY_COMMENTS_PAGINATION:"CometUFIReplyCommentsPagination",UFI_SHARE_DIALOG_OPENS:"UFIShareDialogOpens",UFI2_SHARE_DIALOG_OPENS:"UFI2ShareDialogOpens",UFI_COMPOSER_INPUT_FOCUS:"UFIComposerInputFocus",UFI_STORY_REACTION:"UFIStoryReaction",UFI_COMMENT_REACTION:"UFICommentReaction",UFI2_STORY_REACTION:"UFI2StoryReaction",UFI2_COMMENT_REACTION:"UFI2CommentReaction",COMET_UFI_STORY_REACTION:"CometUFIStoryReaction",COMET_UFI_COMMENT_REACTION:"CometUFICommentReaction",UFI_COMPOSER_KEYPRESS_LATENCY:"UFIComposerKeypressLatency",UFI2_COMPOSER_KEYPRESS_LATENCY:"UFI2ComposerKeypressLatency",COMET_UFI_COMPOSER_KEYPRESS_LATENCY:"CometUFIComposerKeypressLatency"});b=a;e.exports=b}),null);
__d("UFICommonInteractionLogger",["Bootloader","UFICommonInteractionEvents","performanceAbsoluteNow","requestAnimationFrameAcrossTransitions","uuid"],(function(a,b,c,d,e,f){"use strict";f.makeTrackingID=j;f.startInteraction=a;f.endInteractionAtEndOfFrame=c;f.endInteraction=k;var g,h=new Map(),i=0;function j(){return b("uuid")()}function a(a,c){var d=(g||(g=b("performanceAbsoluteNow")))();c=c||j();var e=l(a),f;if(e){var k=i++;f={event:e,markerKey:k};b("Bootloader").loadModules(["QuickPerformanceLogger"],function(a){a.markerStart(e,k,d)},"UFICommonInteractionLogger")}h.set(c,{startTimestamp:d,qplInfo:f});return c}function c(a){b("requestAnimationFrameAcrossTransitions")(function(){k(a)})}function k(a,c){var d=h.get(a);if(d){var e=d.qplInfo;h["delete"](a);if(e){var f=(g||(g=b("performanceAbsoluteNow")))();b("Bootloader").loadModules(["QuickPerformanceLogger","QuickLogActionType"],function(a,b){a.markerEnd(e.event,c?b.FAIL:b.SUCCESS,e.markerKey,f)},"UFICommonInteractionLogger")}}}function l(a){switch(a){case b("UFICommonInteractionEvents").UFI_OPTIMISTIC_COMMENT:return 3735589;case b("UFICommonInteractionEvents").UFI_PERSISTED_COMMENT:return 3735591;case b("UFICommonInteractionEvents").UFI2_OPTIMISTIC_COMMENT:return 3735590;case b("UFICommonInteractionEvents").UFI2_PERSISTED_COMMENT:return 3735592;case b("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT:return 3735618;case b("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT:return 3735619;case b("UFICommonInteractionEvents").UFI2_OPTIMISTIC_COMMENT_EDIT:return 3735593;case b("UFICommonInteractionEvents").UFI2_PERSISTED_COMMENT_EDIT:return 3735594;case b("UFICommonInteractionEvents").COMET_UFI_OPTIMISTIC_COMMENT_EDIT:return 3735626;case b("UFICommonInteractionEvents").COMET_UFI_PERSISTED_COMMENT_EDIT:return 3735627;case b("UFICommonInteractionEvents").UFI_TOP_LEVEL_COMMENTS_PAGINATION:return 3735595;case b("UFICommonInteractionEvents").UFI2_TOP_LEVEL_COMMENTS_PAGINATION:return 3735596;case b("UFICommonInteractionEvents").COMET_UFI_TOP_LEVEL_COMMENTS_PAGINATION:return 3735620;case b("UFICommonInteractionEvents").UFI2_REPLY_COMMENTS_PAGINATION:return 3735597;case b("UFICommonInteractionEvents").COMET_UFI_REPLY_COMMENTS_PAGINATION:return 3735622;case b("UFICommonInteractionEvents").UFI_SHARE_DIALOG_OPENS:return 3735598;case b("UFICommonInteractionEvents").UFI2_SHARE_DIALOG_OPENS:return 3735599;case b("UFICommonInteractionEvents").UFI_COMPOSER_INPUT_FOCUS:return 3735600;case b("UFICommonInteractionEvents").UFI_STORY_REACTION:return 3735601;case b("UFICommonInteractionEvents").UFI_COMMENT_REACTION:return 3735604;case b("UFICommonInteractionEvents").UFI2_STORY_REACTION:return 3735602;case b("UFICommonInteractionEvents").UFI2_COMMENT_REACTION:return 3735603;case b("UFICommonInteractionEvents").COMET_UFI_STORY_REACTION:return 3735623;case b("UFICommonInteractionEvents").COMET_UFI_COMMENT_REACTION:return 3735624;case b("UFICommonInteractionEvents").UFI_COMPOSER_KEYPRESS_LATENCY:return 3735605;case b("UFICommonInteractionEvents").UFI2_COMPOSER_KEYPRESS_LATENCY:return 3735606;case b("UFICommonInteractionEvents").COMET_UFI_COMPOSER_KEYPRESS_LATENCY:return 3735625;default:return null}}}),null);
__d("UFI2ReactionUtils",["UFIReactionTypes"],(function(a,b,c,d,e,f){"use strict";f.checkReactionKey=g;f.getReactionNameFromKey=a;function g(a){return a&&!b("UFIReactionTypes").reactions[a]?0:a||0}function a(a){a=g(a);if(a===0)return"none";else return b("UFIReactionTypes").reactions[a].name}}),null);