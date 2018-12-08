var reset = function() {
		$(".resetBtnID").click(function(){
			$('input[type=text],textarea,select').each(function(){
				$(this).val($(this).attr('oldValue'));
				$(this).removeAttr('style');
				$(this).parent().removeClass('tooltip');
				if($(this).siblings('.tooltiptext').length){
					$(this).siblings('.tooltiptext').hide();
				}
			});
			
			for(var i in dataChanges){
				dataChanges[i] = 'false';
			}
			$(this).attr('disabled', true);
		});
		
		$('input[type=text],textarea').each(function(){
			$(this).attr('oldValue', $(this).val());
			dataChanges[$(this).attr('id')] = 'false';
		});
		
		$('input[type=text]').click(function(){
			if($(this).attr('style')){
				$(this).parent().addClass('tooltip');
				if($(this).siblings('.tooltiptext').length){
					$(this).siblings('.tooltiptext').show();
				}
			}
		});
		
		$('select').each(function(){
			$(this).attr('oldValue', $(this).val());
			dataChanges[$(this).attr('name')] = 'false';
		});
		
		$('input[type=text],textarea').keyup(function(){
			firstTime = false;
			if($(this).val() != $(this).attr('oldValue')){
				dataChanges[$(this).attr('id')] =  'true';
			} else {
				dataChanges[$(this).attr('id')] =  'false';
			}
			
			if($('input[type=text]').attr('style')){
				$('input[type=text]').parent().addClass('tooltip');
				if($('input[type=text]').siblings('.tooltiptext').length){
					$('input[type=text]').siblings('.tooltiptext').show();
				}
			}
			
			var changed = false;
			for(var i in dataChanges){
				if(dataChanges[i] == 'true'){
					changed = true;
					break;
				}
			}
			
			if(changed){
				$(".resetBtnID").attr('disabled', false);
			} else {
				$(".resetBtnID").attr('disabled', true);
			}
		});
		
		$('input[type=text]').change(function(){
			firstTime = false;
			if($(this).val() != $(this).attr('oldValue')){
				dataChanges[$(this).attr('id')] =  'true';
			} else {
				dataChanges[$(this).attr('id')] =  'false';
			}
			
			if($(this).attr('style')){
				if(checkInput($(this).val())){
					$(this).removeAttr('style');
					$(this).parent().removeClass('tooltip');
					
					if($(this).siblings('.tooltiptext').length){
						$(this).siblings('.tooltiptext').hide();
					}
				}
			}
			
			var changed = false;
			for(var i in dataChanges){
				if(dataChanges[i] == 'true'){
					changed = true;
					break;
				}
			}
			
			if(changed){
				$(".resetBtnID").attr('disabled', false);
			} else {
				$(".resetBtnID").attr('disabled', true);
			}
		});
		
		$('select').change(function(){
			firstTime = false;
			if($(this).val() != $(this).attr('oldValue')){
				dataChanges[$(this).attr('name')] =  'true';
			} else {
				dataChanges[$(this).attr('name')] =  'false';
			}
			var changed = false;
			for(var i in dataChanges){
				if(dataChanges[i] == 'true'){
					changed = true;
					break;
				}
			}
			
			if(changed){
				$(".resetBtnID").attr('disabled', false);
			} else {
				$(".resetBtnID").attr('disabled', true);
			}
		});
			
    }