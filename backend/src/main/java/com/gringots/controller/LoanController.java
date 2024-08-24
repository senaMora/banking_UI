package com.gringots.controller;

import com.gringots.model.request.CommonResponseDto;
import com.gringots.model.request.LoanRequestDto;
import com.gringots.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
@CrossOrigin(origins = "http://localhost:3001")
@RestController
@RequestMapping("/loan")
public class LoanController {

    @Autowired
    LoanService loanService;
    @RequestMapping(value = "/create" ,method = RequestMethod.POST)
    public CommonResponseDto createLoan(@RequestBody LoanRequestDto loanRequestDto){

        try {
            return loanService.createLoan(loanRequestDto);
        } catch (SQLException e) {
            CommonResponseDto commonResponseDto = new CommonResponseDto();
            commonResponseDto.setResponseCode( Integer.toString(e.getErrorCode()));
            commonResponseDto.setResponseMessage(e.getMessage());
            commonResponseDto.setQuerySuccesful(false);
            return commonResponseDto;
        }
    }
}
