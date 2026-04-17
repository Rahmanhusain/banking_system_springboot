package com.vyns.banking_system.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class AccountCreateDto {
    @NotBlank
    private String accountHolderName;
}
