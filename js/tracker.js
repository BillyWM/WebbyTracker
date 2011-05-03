/**
	Basic classes and constants that apply to the whole tracker
	
	Will be made into proper MooTools classes later
**/

//The state of the pattern editor, such as where the highlight is
function PatternView() {
	
	//Current means which thing is selected
	this.octave = 3;
	this.channels = 4;
	this.step = 1;
	this.rows = 64;
	this.maxChannel = this.channels - 1;
	this.maxRow = this.rows - 1;
	this.currentRow = 0;
	this.currentChannel = 0;
	this.currentGroup = 0;			//which of the 5 groups is selected
									//		note, isntrument, volume, effect, parameter
	this.currentCol = 0;			//Which of the columns is selected
									//0: note, 1-2: instrument, 3-4: vol 5: effect 6-7: param
	this.selected = "note";			//What kind of thing is highlighted. Mostly for CSS purposes
	this.selectedEl = null;			//an element reference for easy manipulation
	this.mode = "view";				//"view" or "edit"

}

