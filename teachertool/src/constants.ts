export namespace Strings {
    export const AppTitle = lf("Code Evaluation");
    export const AppTitleShort = lf("Code Eval");
    export const ErrorLoadingChecklistMsg = lf("That wasn't a valid checklist.");
    export const ConfirmReplaceChecklistMsg = lf("This will replace your current checklist. Continue?");
    export const UntitledProject = lf("Untitled Project");
    export const UntitledChecklist = lf("Untitled Checklist");
    export const NewChecklistTitle = lf("New Checklist");
    export const NewChecklist = lf("New Checklist");
    export const ImportChecklist = lf("Import Checklist");
    export const ExportChecklist = lf("Export Checklist");
    export const Export = lf("Export");
    export const Remove = lf("Remove");
    export const Evaluate = lf("Evaluate");
    export const Criteria = lf("Criteria");
    export const Name = lf("Name");
    export const ChecklistNamePlaceholder = lf("Enter Checklist Name");
    export const AddCriteria = lf("Add Criteria");
    export const Actions = lf("Actions");
    export const RunOnLoad = lf("Evaluate on load");
    export const RunOnLoadDescription = lf("Automatically evaluate a project when it is loaded");
    export const AddNotes = lf("Add Notes");
    export const DragAndDrop = lf("Drag & Drop");
    export const ReleaseToUpload = lf("Release to Upload");
    export const Browse = lf("Browse");
    export const SelectChecklistFile = lf("Select Checklist File");
    export const InvalidChecklistFile = lf("Invalid Checklist File");
    export const Cancel = lf("Cancel");
    export const SelectBlock = lf("Select Block");
    export const ValueRequired = lf("Value Required");
    export const AddSelected = lf("Add Selected");
    export const Continue = lf("Continue");
    export const Loading = lf("Loading...");
    export const Close = lf("Close");
    export const Max = lf("Max");
    export const AddToChecklist = lf("Add to Checklist");
    export const SelectCriteriaDescription = lf("Select the criteria you'd like to include");
    export const Checklist = lf("Checklist");
    export const Home = lf("Home");
    export const CreateEmptyChecklist = lf("Create Empty Checklist");
    export const Other = lf("Other");
    export const SignIn = lf("Sign In");
    export const ConfirmDeleteCriteriaInstance = lf("Are you sure you want to remove this criteria?");
    export const Print = lf("Print");
    export const Rename = lf("Rename");
    export const RenameChecklist = lf("Rename checklist");
    export const PrintChecklist = lf("Print checklist");
    export const EvaluateChecklist = lf("Evaluate checklist");
    export const UnableToEvaluate = lf("Unable to evaluate");
    export const UnableToReachAI = lf("Unable to reach the AI service");
    export const UnexpectedError = lf("An unexpected error occurred");
    export const Dismiss = lf("Dismiss");
    export const EvaluationComplete = lf("Evaluation complete");
    export const UnableToEvaluatePartial = lf("Unable to evaluate some criteria");
    export const GiveFeedback = lf("Give Feedback");
}

export namespace Ticks {
    export const Loaded = "teachertool.loaded";
    export const HomeLink = "teachertool.homelink";
    export const BrandLink = "teachertool.brandlink";
    export const OrgLink = "teachertool.orglink";
    export const Error = "teachertool.error";
    export const NewChecklist = "teachertool.newchecklist";
    export const ImportChecklist = "teachertool.importchecklist";
    export const ExportChecklist = "teachertool.exportchecklist";
    export const LoadChecklist = "teachertool.loadchecklist";
    export const Evaluate = "teachertool.evaluate";
    export const RunOnLoad = "teachertool.runonload";
    export const AddCriteria = "teachertool.addcriteria";
    export const RemoveCriteria = "teachertool.removecriteria";
    export const AddResultNotes = "teachertool.addresultnotes";
    export const UserMenuSignout = "teachertool.usermenu.signout";
    export const UserMenuSignIn = "teachertool.usermenu.signin";
    export const SignedOutPanelSignIn = "teachertool.signedoutpanel.signin";
    export const CriteriaFeedback = "teachertool.criteriafeedback";
    export const Print = "teachertool.print";
    export const UnhandledEvalError = "teachertool.evaluateerror";
    export const FeedbackForm = "teachertool.feedbackform";
}

namespace Misc {
    export const LearnMoreLink = "https://makecode.microbit.org/teachertool"; // TODO: Replace with golink or aka.ms link
}

export const Constants = Object.assign(Misc, { Strings, Ticks });
